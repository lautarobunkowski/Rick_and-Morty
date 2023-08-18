// ---------  HOOKS  ---------
import { useState, useEffect } from 'react';
// ---------  STYLES  ---------
import './App.css';
// ---------  COMPONENTS  ---------
import Nav from './components/Nav/Nav.jsx';
import About from './views/About/About.jsx';
import Home from './views/Home/Home.jsx'
import Landing from './views/Landing/Landing.jsx'
import Favorites from "./views/Favorites/Favorites";
import Deatil from './components/Deatil/Deatil.jsx';
// ---------  REACT DOM  ---------
import {Routes, Route, useNavigate} from 'react-router-dom'



function App() {
   const [characters, setCharacters] = useState([])
   
   const navigate = useNavigate(); //ruta actual
   const [access, setAccess] = useState(false); // estado de acceso
   const EMAIL = 'lautibunko@gmail.com'; //mock
   const PASSWORD = '43244847'; //mock

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate('/home');
      } else {
         window.alert('No ha ingresado los datos correctos')
      }
   }

   const logOut = () => {
      setAccess(false);
      setCharacters([])
   }

   const buscarPersonaje = (characters, newCharacter) => {
      return characters.some(character => character.id === newCharacter.id);
   }

   const onClose = (id) => {
      let newCharacters = characters.filter(character => character.id !== Number(id))
      setCharacters(newCharacters);
   }

   const searchCharacters = (id) => {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
         if(buscarPersonaje(characters, data)){
            window.alert('Ya hay personajes con ese ID');
         }
         else if(data.name){
            setCharacters((oldChars) =>[...oldChars, data])
            // setCharacters([...characters, data])
         } else {
            window.alert('No hay personajes con ese ID');
         }
      })
   }

   // USE EFFECT ------------
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         <Nav onSearch={searchCharacters} logOut={logOut}/>
         <Routes>
            <Route path='/'element={<Landing login={login}/>}/>
            <Route path='/home' element={<Home characters={characters} onClose={onClose} setCharacters={setCharacters}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/deatil/:id' element={<Deatil/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
         </Routes>
      </div>
   );

}

export default App;
