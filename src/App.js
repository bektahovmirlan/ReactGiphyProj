import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Categories from './components/Category/Categories';
import Trending from './components/Trending/Trending';
import Headers from './components/Header/Header';
import Random from './components/Random/Random';

function App() {
  return (
    <BrowserRouter>   
            <div className="app">     
                      <Headers />
                      <Categories />
                  <div className="content">
                  <Routes>
                      <Route path="/" element={<Trending />}/>  
                    </Routes> 
                    <Routes>
                      <Route path="trending" element={<Trending />}/>  
                    </Routes>
                    <Routes>
                      <Route path="random" element={<Random />}/>  
                    </Routes>     
                  </div>
            </div>
    </BrowserRouter>
  );
}

export default App;
