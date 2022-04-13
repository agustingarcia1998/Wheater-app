import React from 'react';
import styles from './Card.module.css'

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  
  return (
    <div className={styles.card}>
      <button className={styles.boton} onClick={onClose}>X</button>
      <h3>{name}</h3>

      <div className={styles.temp}>
        <div> 
          <p>Min</p>
          <span>{min}</span>
        </div>

        <div> 
          <p>Max</p>
          <span>{max}</span>
        </div>
        
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}alt="ícono de clima">
        
        </img>
      </div>
      
    </div>
  ) 

};