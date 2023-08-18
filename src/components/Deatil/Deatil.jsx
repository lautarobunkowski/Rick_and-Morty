import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

const Deatil = () => {
   const {id} = useParams();
   const [character, setCharacter] = useState({})
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
            if (data.name) {
            setCharacter(data);
            setLoading(false);
            console.log("se esta ejecutando el hook")
            } else {
            window.alert('No hay personajes con ese ID');
            }
      });
      return setCharacter({});
   }, [id])

   return(
   <div>
      {loading ? <h1>Loading...</h1> : (
      <>
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      <img src={character.image} alt={character.name} />
      </>
   )}
   </div>);
}

export default Deatil;