import React from 'react'
import { BiUpArrow } from 'react-icons/bi';
import styles from "./UpScroll.module.css";
// import { useLocation } from "react-router-dom";

const UpScroll = () => {
    // const location = useLocation().pathname;

    const handleClick = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
  return (
    <button className={styles.button} onClick={() => handleClick()}>
        <BiUpArrow/>
    </button>
  )
}

export default UpScroll