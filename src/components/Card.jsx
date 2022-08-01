import React from "react";
import style from './Card.module.css';
import Temp from './Temp.jsx';
import { Link } from "react-router-dom";
import  stale from "./Moreinfo.module.css";


export default function Card({onClose, name, min, max, img, main, wind, id}) { //Exportamos Card para que App.js la pueda importar
  // acá va tu código

  return (
  <div className={[style.card, main ? style.mainCard : ''].join(' ')}>
    <Link to={`/ciudad/${id}`} className={stale.a}>
        <span className={style.name}> {name} </span>
    </Link>

    <button onClick={onClose} className={style.bt}> 𝐗 </button>

    <section>

      <Temp className={style.temp} label='Min' value={min} />
      <Temp className={style.temp} label='Max' value={max} />

      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="La imagen no funciona"/> 

    </section>
     
  </div>
 
  
  )};