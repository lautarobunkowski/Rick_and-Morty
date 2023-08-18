import React from 'react'
import Cards from '../../components/Cards/Cards.jsx';
import styles from './Home.module.css';
import img__home from "./Background_Home.png";

const Home = (props) => {
  return (
      <div className={styles.home}>
        {props.characters.length === 0?(
          <>
            <div className={styles.home__header}>
              <div className={styles.home__headerInformation}>
                <h1>RICK AND MORTY</h1>
                <h2>search rick and morty characters by ID</h2>
              </div>
              <img className={styles.img__home} src={img__home} alt="" />
            </div>
          </>
        ): <Cards characters={props.characters} onClose={props.onClose} setCharacters={props.setCharacters}/>}
      </div>
  )
}

export default Home