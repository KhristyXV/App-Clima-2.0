import React  from "react";
import style from './Menu.module.css';
import img from '../img/tokyo.mp4'
import { Link } from "react-router-dom";


 const Menu = () => {
    return (
      <main id="hero">
        <div className={style.promo}>
        <Link to='/clima'>
        <button className={style.button}>  </button>
        </Link>
        </div>
        <video muted autoPlay loop src={img} type='video/mp4'/>
        <div className={style.capa}> </div>    
      </main>
    )
}

export default Menu
