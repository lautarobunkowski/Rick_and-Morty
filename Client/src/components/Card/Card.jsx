import {Link} from 'react-router-dom';
import styles from "./Card.module.css";
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { BiSolidTrashAlt } from 'react-icons/bi';
import { MdFavorite } from 'react-icons/md';

export default function Card(props) {
   const dispatch = useDispatch();
   // const favorites = useSelector(state => state.favorites)
   const favorites = useSelector(state => state.allCharacters)
   const actualLocation = useLocation().pathname;

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
         <Link className={styles.link} to={`/deatil/${props.id}`}>
               <img className={styles.img__card} src={props.image} alt={props.name} />
         </Link>

         <h2 className={`${styles.card__status} ${(props.status === "Alive")? styles.alive: styles.dead}`}>{props.status}</h2>

         <div className={styles.buttons__container}>
            {isFav? (
                  <MdFavorite className={`${styles.button__fav} ${styles.isFav}`} onClick={handleFavorite}/>
               ) : (
                  <MdFavorite className={`${styles.button__fav} ${styles.notfav}`} onClick={handleFavorite}/>
               )}
            {actualLocation !== "/favorites"?
            <BiSolidTrashAlt onClick={() => props.onClose(props.id)} className={styles.button__close}/>:null}
         </div>

      </div>
   )
}
