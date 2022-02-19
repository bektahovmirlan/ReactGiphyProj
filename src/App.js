import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';
import Categories from './components/Category/Categories';
import Headers from './components/Header/Header';
import Routing from './components/Routing';

function App() {
  return (
    <BrowserRouter>
      <div className="app">     
         <Headers />
         <Categories />
         <div className="content">
            <Routing />
          </div>
                
       </div>
    </BrowserRouter>
  );
}

export default App;