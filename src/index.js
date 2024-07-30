import './styles/index.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from "next-themes";
import Home from './Home';
import ModelScreen from './ModelScreen';
import SlidingPages from './SlidingPages';

async function loadModelsData() {
    const response = await fetch('/fake_data/models.json');
    let data = await response.json();
    return data;
}

let App = () => {
    const [modelsData, setModelsData] = useState(null);

    useEffect(() => {
        loadModelsData().then(data => setModelsData(data));
    }, []);

    const pages = [
        // <div>$%^&*(IUGFDRTU&UIYGHFRYT^&</div>,
        <Home />,
        <ModelScreen modelsData={modelsData} />
    ];

    return <SlidingPages pages={pages} initialPage={0} transitionTime={300} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <NextThemeProvider attribute='class' defaultTheme='system'>
            <NextUIProvider>
                <main >
                    <App />
                </main>
            </NextUIProvider>
        </NextThemeProvider>
    </React.StrictMode>
);