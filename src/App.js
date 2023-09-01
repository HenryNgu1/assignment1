import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import BasicGrid from './home.js';
import Product from './product'; 
import Profile from './profilepage';



function App() {
    return (
        <div>
            <Router>  
                <Routes>
                    <Route path="/" element={<BasicGrid />} /> 
                    <Route path="/product" element={<Product />} />
                    <Route path="/profilepage" element={<Profile/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
