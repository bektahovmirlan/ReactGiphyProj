import React from "react";
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

function Header() { 

  return (
    
        <div className={s.header}>
            <h1><NavLink className={s.giphy} to='/'>GIPHY</NavLink></h1>
            <div className={s.buttons}>
                <NavLink className={s.a} to='/trending'>TRENDING</NavLink>
                <NavLink className={s.a} to='/random'>RANDOM</NavLink>
            </div>
            <div className={s.login}>
              <NavLink className={s.sign} to='/login'>Sign in</NavLink>
           </div>

        </div>
  );
}

export default Header;