import React from 'react';
import {createRoot} from 'react-dom/client';
import './globalStyles/reset.scss';
import './globalStyles/main.scss';
//fonts
import './assets/fonts/poppins/Poppins-ExtraBold.ttf'
import './assets/fonts/poppins/Poppins-Black.ttf'
import './assets/fonts/poppins/Poppins-Bold.ttf'
import './assets/fonts/poppins/Poppins-ExtraLight.ttf'
import './assets/fonts/poppins/Poppins-Light.ttf'
import './assets/fonts/poppins/Poppins-Medium.ttf'
import './assets/fonts/poppins/Poppins-Thin.ttf'
import './assets/fonts/poppins/Poppins-SemiBold.ttf'
import './assets/fonts/poppins/Poppins-Regular.ttf'
import App from './App';
import {MyStoreProvider} from "./store/Context/Context";

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(
        <MyStoreProvider>
            <App/>
        </MyStoreProvider>
    );
}
