// ---------  HOOKS  ---------
import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
// ---------  STYLES  ---------
import './App.css';
// ---------  COMPONENTS  ---------
import Nav from './components/Nav/Nav.jsx';
import About from './views/About/About.jsx';
import Home from './views/Home/Home.jsx'
import Landing from './views/Landing/Landing.jsx'
import Favorites from "./views/Favorites/Favorites";
import Deatil from './views/Deatil/Deatil.jsx';
import Footer from "./components/Footer/Footer.jsx";
import UpScroll from "./components/UpScroll/UpScroll";
// ---------  REACT DOM  ---------
import {Routes, Route, useNavigate} from 'react-router-dom'
// ---------  ACTIONS  ---------
import { deleteChars } from "./redux/actions.js";
import axios from "axios";
// axios.defaults.baseURL = "https://rickand-morty-production.up.railway.app/rickandmorty/"
axios.defaults.baseURL = "http://localhost:3001/rickandmorty/"

function App() {
   const [characters, setCharacters] = useState([])
   const dispatch = useDispatch();
   
   const navigate = useNavigate(); //ruta actual
   const [access, setAccess] = useState(false); // estado de acceso

   // const login = (userData) => {
   //    if(userData.email === EMAIL && userData.password === PASSWORD){
   //       setAccess(true);
   //       navigate('/home');
   //    } else {
   //       window.alert('No ha ingresado los datos correctos')
   //    }
   // }


   const login = async (userData) => {
      try {
         const { email, password } = userData;
         const URL = '/login';
         const { data }  = await axios.get(URL +`?email=${email}&password=${password}`)
         setAccess(data.access);
         data.access && navigate('/home');
      } catch (error) {
         if(!error.response) return window.alert(error.message)
         window.alert(error.response.statusText)
      }
   }
   const logOut = () => {
      setAccess(false);
      setCharacters([])
      dispatch(deleteChars())
   }
   const buscarPersonaje = (characters, newCharacter) => {
      return characters.some(character => character.id === newCharacter.id);
   }
   const searchCharacters = async (id) => {
      try {
         const { data } = await axios(`/character/${id}`)

         if(buscarPersonaje(characters, data)){
            window.alert('Ya hay personajes con ese ID');
         } else {
            setCharacters((oldChars) =>[...oldChars, data])
            // setCharacters([...characters, data])
         }
      } catch (error) {
         window.alert(error.message)
      }
      
   }
   const onClose = (id) => {
      let newCharacters = characters.filter(character => character.id !== Number(id))
      setCharacters(newCharacters);
   }

   // const searchCharacters = (id) => {
   //    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
   //    // fetch(`https://rickandmortyapi.com/api/character/${id}`)
   //    .then((res) => res.json())
   //    .then((data) => {
   //       console.log(data)
   //       if(buscarPersonaje(characters, data)){
   //          window.alert('Ya hay personajes con ese ID');
   //       }
   //       else if(data.name){
   //          setCharacters((oldChars) =>[...oldChars, data])
   //          // setCharacters([...characters, data])
   //       } else {
   //          window.alert('No hay personajes con ese ID');
   //       }
   //    })
   // }
   
   // USE EFFECT ------------
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className='App'>
         <div className="background-container"/>
         <Nav onSearch={searchCharacters} logOut={logOut}/>
         <Routes>
            <Route path='/'element={<Landing login={login}/>}/>
            <Route path='/home' element={<Home characters={characters} onClose={onClose} setCharacters={setCharacters}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/deatil/:id' element={<Deatil/>}/>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
         </Routes>
         <UpScroll/>
         <Footer/>
      </div>
   );

}

export default App;
