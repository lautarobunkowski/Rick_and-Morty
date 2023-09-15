import {Link} from 'react-router-dom';
import styles from "./Card.module.css";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";

export default function Card(props) {
   const dispatch = useDispatch();
   // const favorites = useSelector(state => state.favorites)
   const favorites = useSelector(state => state.allCharacters)

   const [isFav, setIsFav] = useState(false)

   const handleFavorite= () => {
      if(isFav === true) {
         setIsFav(false)
         dispatch(removeFav(props.id))
      } else {
         setIsFav(true)
         dispatch(addFav(props))
      }
   }

   useEffect(() => {
      favorites.forEach((fav) => {
         if(fav.id === props.id) {
            setIsFav(true);
         }
      })
   },[favorites]);

   return (
      <div className={styles.card__container}>
         <img src={props.image} alt={props.name} />

         <button onClick={() => props.onClose(props.id)}>X</button>

         <h2 
            className={`${styles.card__status} ${(props.status === "Alive")? styles.alive: styles.dead}`}
            >{props.status}
         </h2>

         {isFav? (
               <button className={styles.button__fav} onClick={handleFavorite}>❤️</button>
            ): (
               <button className={styles.button__fav} onClick={handleFavorite}>🤍</button>
            )}

         <div className={styles.card__information}>
            <Link className={styles.link} to={`/deatil/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
            <h2>{props.species}</h2>
            {/* <h2 className={styles.card__gender}>{gender}</h2>
            <h2 className={styles.card__origin}>{origin}</h2> */}
         </div>
      </div>
   )
}
