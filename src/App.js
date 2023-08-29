import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import BasicGrid from './home.js';
import Product from './product'; 



function App() {
    return (
        <div>
            <Router>  
                <Routes>
                    <Route path="/" element={<BasicGrid />} /> 
                    <Route path="/product" element={<Product />} /> 
                </Routes>
            </Router>
        </div>
    );
}

export default App;