import { useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value);
   }

   const handleOnKeyDown = (event) => {
      if(event.key === 'Enter'){
         props.onSearch(id);
      }
   }

   return (
      <div className={styles.searchBar__container}>
         <input type='text' onChange={handleChange} onKeyDown={handleOnKeyDown}/>
         <button className={styles.button} onClick={() => props.onSearch(id)}>Agregar</button>
      </div>
   );
}
