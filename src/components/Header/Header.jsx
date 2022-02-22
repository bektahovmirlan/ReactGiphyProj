import React from "react";
import {NavLink} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import s from './Header.module.css';
import {useAuth} from '../../hooks/userAuth'
import {removeUser} from '../../state/users/userSlice'

function Header() { 

  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();

  return (
    
        <div className={s.header}>
            <h1><NavLink className={s.giphy} to='/'>GIPHY</NavLink></h1>
            <div className={s.buttons}>
                <NavLink className={s.a} to='/trending'>TRENDING</NavLink>
                <NavLink className={s.a} to='/random'>RANDOM</NavLink>
            </div>
            <div className={s.login}>
              {isAuth ? <NavLink onClick={() => dispatch(removeUser())} className={s.sign} to='/login'>Log Out <br />{email}</NavLink>

              : <NavLink className={s.sign} to='/login'>Sign in</NavLink>}
           </div>

        </div>
  );
}

export default Header;