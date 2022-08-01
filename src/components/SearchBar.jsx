import React from 'react';
import style from './SearchBar.module.css'
import {BiSearchAlt} from 'react-icons/bi'


export default function SearchBar({ onSearch }) {
  // acá va tu código
  return (
   
  <form
   className={style.searchBar}
  onSubmit={ (e) => {
   e.preventDefault(); //Previene que la pagina se recarge
   const input = document.getElementById('cityInput')
   onSearch(input.value)
  }}>

   <input id='cityInput' className={style.input} type='text' placeholder='City...'/>
   <button className={style.sumbit}type='Searching...'>  <BiSearchAlt/>  </button> 
  </form>
  )
};


//El onclick es un escuchador de eventos (event lisener), cuando el usuario clickea sobre el lo que hara segun la funcion construida
// es atravez de la prop, llamar a onSearch para que se ejecute y de el mensaje 'Searching...' 