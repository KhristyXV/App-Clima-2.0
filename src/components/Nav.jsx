import React from 'react';
import SearchBar from './SearchBar.jsx';
import style from './Nav.module.css';
import {Link} from 'react-router-dom';
import stole from './SearchBar.module.css'
import name from './Cards.jsx';


function Nav({onSearch}) {
  return (
    <nav className={stole.input}>
      <SearchBar className={style.search} onSearch={onSearch}/>

      <Link to ='/'>
        <span className="navbar-brand">  </span>
      </Link>

      <Link to = '/'>
        <span className={style.about}> INICIO </span>
      </Link>
    
    </nav>
  );
};

export default Nav;
