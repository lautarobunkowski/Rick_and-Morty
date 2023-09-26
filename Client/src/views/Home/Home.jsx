import React from 'react'
import Cards from '../../components/Cards/Cards.jsx';
import styles from './Home.module.css';
// IMAGES --------------------------
import img_home from "./Background_Home.png";
import img_object_1 from "./object_1.png";
import img_object_2 from "./object_2.png";
// ---------------------------------------
import 'animate.css';

const Home = (props) => {
  return (
      <div className={`animate__animated animate__fadeInUp ${styles.home}`}>
        {props.characters.length === 0?(
          <>
            <div className={styles.home__header}>
              <div className={styles.home__headerInformation}>
                <h1>RICK AND MORTY</h1>
                <h2>search rick and morty characters by ID</h2>
              </div>
              <div className={styles.home__imgContainer}>
                <img className={styles.img__home} src={img_home} alt="" />
                <img className={styles.img__object__1} src={img_object_1} alt="" />
                <img className={styles.img__object__2} src={img_object_2} alt="" />
              </div>
            </div>
          </>
        ): <Cards characters={props.characters} onClose={props.onClose} setCharacters={props.setCharacters}/>}
      </div>
  )
}

export default Home