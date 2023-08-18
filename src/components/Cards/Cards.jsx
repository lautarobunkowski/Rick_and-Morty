import Card from '../Card/Card.jsx';
import styles from "./Cards.module.css";

export default function Cards(props) {
   const handleDelete = () => {
      props.setCharacters([])
   }

   return <div className={styles.cards__container}>
      {props.characters.length >= 1?(
      <button className={styles.button__close} onClick={handleDelete}>Cerrar</button>): null  
      }
      {
         props.characters.map(character => {
            return (<Card
               id={character.id}
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={props.onClose}
            />)
         })
      }
   </div>;
}
