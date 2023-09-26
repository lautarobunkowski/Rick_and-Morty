import { useState } from "react";
import styles from './SearchBar.module.css';
import { GiCardRandom } from 'react-icons/gi';

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
         <GiCardRandom className={`${styles.button} ${styles.random}`} onClick={() => props.onSearch(Math.floor(Math.random() * 826))}/>
      </div>
   );
}
