import React from "react";
import style from './Moreinfo.module.css'
import {Link} from 'react-router-dom';
import img from'../img/pari2.jpg'

export default function More({city}) {
    return (
        
           
             
                   

                <div className={style.subContainer}>
                      <img src={img} alt="No funciona" className={style.capa}/>
                        
                        <div className={style.nameContainer}>
                        <h2 className={style.name}> {city.name}</h2>
                        </div>
                    <div className={style.card}>
                        <div className={style.movePropsContainer}>
                        <div className={style.propsContainer}>
                       

                        <div>Temperatura: {city.temp} ºC</div>
                        <div>Clima: {city.weather}</div>
                        <div>Viento: {city.wind} km/h</div>
                        <div>Cantidad de nubes: {city.clouds}%</div>
                        <div>Latitud: {city.latitud}º</div>
                        <div>Longitud: {city.longitud}º</div>
                        
                        </div>
                        </div>

                        <div className={style.containerBt}>
                        <Link to='/clima'>
                        <button className={style.bt}> Regresar </button>
                        </Link>
                        </div>

                        <div className={style.bord}/>
                    </div>  
                   
                </div>    
               
             
        
    )
}