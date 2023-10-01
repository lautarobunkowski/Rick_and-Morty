import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import styles from "./Deatil.module.css";

const Deatil = () => {
   const {id} = useParams();
   const [character, setCharacter] = useState({})
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchData = async() => {
         try {
            const {data} = await axios(`/character/${id}`)
                  setCharacter(data);
                  // setLoading(false);
                  setTimeout(() => {
                     setLoading(false); // Cambia el estado a false después de 2000 ms (2 segundos)
                  }, 1000);
         } catch (error) {
            window.alert(error.message)
         }
      }
      fetchData()
      return setCharacter({});
   }, [id])

   return<div className={styles.container__Deatil}>
      {loading ?
         <div className='loader'></div> : (
      <div className={styles.deatil}>
         <img className={styles.img__Deatil} src={character.image} alt={character.name} />
         <div className={styles.deatil__information}>
            <h2 className={styles.name__Deatil}>{character.name}</h2>
            <h2 className={styles.status__Deatil}>{character.status}</h2>
            <h2 className={styles.species__Deatil}>{character.species}</h2>
            <h2 className={styles.gender__Deatil}>{character.gender}</h2>
            <h2 className={styles.origin__Deatil}>{character.origin.name}</h2>
         </div>
      </div>
   )}
   </div>;
}

export default Deatil;