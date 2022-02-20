import React from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Categories from './components/Category/Categories';
import Headers from './components/Header/Header';
import Routing from './components/Routing';
import {useAuth} from './hooks/userAuth'
import LoginPage from './components/Athentication/LoginPage';
import RegisterPage from './components/Athentication/RegisterPage';
  
function App() {

  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();

  return (
    <BrowserRouter>
      <div className="app">
            <Headers />
            <Categories/>
          <div className="content">
            <Routing />
          </div> 
      </div>
    </BrowserRouter>
  );
}

export default App;