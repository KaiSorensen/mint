import React from 'react';

const getRandomColor = () => {
    const letters = '89ABCDEF'; // Use higher values for brighter colors
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
};

const getRandomAngle = () => Math.floor(Math.random() * 360); // Random angle between 0 and 360 degrees

const GradientSquare = ({ width = 200, height = 200 }) => {
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    const color3 = getRandomColor();
    const angle = getRandomAngle();

    const squareStyle = {
        width: `${width}px`,
        height: `${height}px`,
        borderRadius: '15px',
        background: `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`,
        filter: 'blur(5px)',
    };

    return <div style={squareStyle}></div>;
};

export default GradientSquare;
