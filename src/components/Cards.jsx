import React from 'react';
import Card from './Card';
import styles from './Cards.module.css'
import stle from './Moreinfo.module.css'

export default function Cards({cities,  onClose }) {
  // acá va tu código
  // tip, podés usar un map
  return( 
  <div className={styles.cards}>
    {cities.map((c) =>  (
    <Card //Aqui realizamos una map de card, pero de una manera a que todas las Cards segun diferente ciudad
    //Por eso mismo este componente se llama 'CARDS'
      max={c.max} 
      min={c.min}
      name={c.name}
      img={c.img}
      id={c.id}
      key= {c.id}
      onClose={() => onClose(c.id)}
      />
      ))}
      <span className={stle.animatedshadow}> {} </span>
  </div>
  
  )
};

