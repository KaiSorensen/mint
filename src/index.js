import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import App from './App';
import Home from './Home';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemeProvider } from "next-themes";
// import reportWebVitals from './unrelatedJS/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <NextThemeProvider attribute='class' defaultTheme='system'>
        <NextUIProvider>
            <main> 
                <Home />
            </main>
        </NextUIProvider>
    </NextThemeProvider>
</React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
