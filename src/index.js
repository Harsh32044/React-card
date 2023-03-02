import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';

import Info from './components/Info.js'
import About from './components/About.js'
import Interests from './components/Interests.js';
import Footer from './components/Footer.js';


const App = () => {
    return (
        <React.StrictMode>
        <Info/>
        <About/>
        <Interests/>
        <Footer/>
        </React.StrictMode>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App/>)