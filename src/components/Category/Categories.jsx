import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Categories.module.css';

function Categories() {
  return (
    <div className={s.categories}>
      <li><NavLink className={s.giphy} to='/dance'>Dance</NavLink></li>
      <li><NavLink className={s.giphy} to='/coding'>Coding</NavLink></li>
      <li>Categorys</li>
      <li>Categorys</li>
      <li>Categorys</li>
      <li>Categorys</li>
      
    </div>
  );
}

export default Categories;