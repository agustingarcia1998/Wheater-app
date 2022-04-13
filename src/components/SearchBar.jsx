import React, {useState} from 'react';
import style from './SearchBar.module.css'


export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");// useState se utiliza para darle un valor
  //inicial al estado (city)


  return (
    <form className={style.bar} onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
         className={style.input}
        type="text"
        value={city} onChange={e => setCity (e.target.value)}
        placeholder="City..."
      />
      <input className={style.boton} type="submit" value="Agregar" />
    </form>
  );
}


