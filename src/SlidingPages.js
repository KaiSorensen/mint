import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@nextui-org/react';
import TopBar from './TopBar';

const NavButton = ({ onClick, direction }) => (
    <Button
        onClick={onClick}
        className={`nav-button ${direction}-button`}
        style={{
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            [direction]: '10px',
            zIndex: 1000,
        }}
    >
        {direction === 'left' ? 'L' : 'R'}
    </Button>
);

const SlidingPages = ({ pages, initialPage = 0, transitionTime = 500 }) => {
    const totalPages = pages.length;
    const [currentPageIndex, setCurrentPageIndex] = useState(initialPage + totalPages);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const pageContainerRef = useRef(null);

    const goToNextPage = () => {
        setIsTransitioning(true);
        setCurrentPageIndex((prevIndex) => prevIndex + 1);
    };

    const goToPreviousPage = () => {
        setIsTransitioning(true);
        setCurrentPageIndex((prevIndex) => prevIndex - 1);
    };

    useEffect(() => {
        if (isTransitioning) {
            const timer = setTimeout(() => {
                setIsTransitioning(false);

                // Adjust the index to stay in the middle section for infinite scrolling
                setCurrentPageIndex((prevIndex) => {
                    if (prevIndex >= totalPages * 2) {
                        return prevIndex - totalPages;
                    } else if (prevIndex < totalPages) {
                        return prevIndex + totalPages;
                    } else {
                        return prevIndex;
                    }
                });
            }, transitionTime);

            return () => clearTimeout(timer);
        }
    }, [isTransitioning, totalPages, transitionTime]);

    useEffect(() => {
        const handleResize = () => {
            if (pageContainerRef.current) {
                pageContainerRef.current.style.transition = 'none';
                pageContainerRef.current.style.transform = `translateX(-${(currentPageIndex * 100) / (totalPages * 3)}%)`;
                requestAnimationFrame(() => {
                    if (pageContainerRef.current) {
                        pageContainerRef.current.style.transition = isTransitioning
                            ? `transform ${transitionTime}ms ease-in-out`
                            : 'none';
                    }
                });
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentPageIndex, isTransitioning, totalPages, transitionTime]);

    return (
        <div className="sliding-container" style={{ overflow: 'hidden', width: '100%', height: '100vh', position: 'relative' }}>
            <TopBar />
            <div
                className="page-slider"
                ref={pageContainerRef}
                style={{
                    display: 'flex',
                    width: `${totalPages * 3 * 100}vw`,
                    transform: `translateX(-${(currentPageIndex * 100) / (totalPages * 3)}%)`,
                    transition: isTransitioning ? `transform ${transitionTime}ms ease-in-out` : 'none',
                }}
            >
                {[...pages, ...pages, ...pages].map((page, index) => (
                    <div key={index} className="page" style={{ width: '100vw', height: '100vh', flexShrink: 0 }}>
                        {page}
                    </div>
                ))}
            </div>
            <NavButton onClick={goToPreviousPage} direction="left" />
            <NavButton onClick={goToNextPage} direction="right" />
        </div>
    );
};

export default SlidingPages;
