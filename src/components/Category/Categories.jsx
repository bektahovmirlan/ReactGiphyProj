import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Categories.module.css';

function Categories() {
  return (
    <div className={s.categories}>
      <div className={s.items}>
            <NavLink to='/dance'
             className = {s.item }
             >Dancing</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/coding'
             className = {s.item }
             >Coding</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/coding'
             className = {s.item }
             >Animals</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/coding'
             className = {s.item }
             >Reactions</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/coding'
             className = {s.item }
             >Sports</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/coding'
             className = {s.item }
             >Stickers</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/coding'
             className = {s.item }
             >Artists</NavLink>
        </div>
        <div className={s.items}>
            <NavLink to='/coding'
             className = {s.item }
             >Cartoons</NavLink>
        </div>
    </div>
  );
}

export default Categories;