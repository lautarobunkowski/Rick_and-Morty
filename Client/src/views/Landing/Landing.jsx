import React from 'react'
import Form from "../../components/Form/Form.jsx";
import styles from './Landing.module.css';

const Landing = (props) => {
  return (
    <div className={styles.landing}>
      <Form login={props.login}/>
    </div>
  )
}

export default Landing