import React, { useState, useEffect } from 'react'
import validation from "./validation.js";
import styles from "./Form.module.css";
import Button from "../Button.jsx";
import imageFormBack from "./Background.png";
import imageForm from "./rick-and-morty.png"; 

const Form = (props) => {
    const [userData, setUserData] = useState({
        email:"",
        password:""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]:value})

        setErrors(validation({...userData, [property]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.login(userData);
    }

  return (
    <form onSubmit={handleSubmit} className={styles.form__container}>
        <div className={styles.form__imgContainer}>
            <img className={styles.form__imgBackground} src={imageFormBack} alt="image form Background"/>
            <img className={styles.form__img} src={imageForm} alt="image form" />
        </div>
        <div className={styles.form}>
            <h3>Hola! Bienvenidos</h3>
            <h4>Ingresa a tu cuenta:</h4>
            <div className={styles.form__information}>
                <div className={styles.form__email}>
                    <label htmlFor="#">Correo Electronico:</label>
                    <input 
                        value={userData.email} 
                        type="text" name='email' 
                        placeholder='nombre@mail.com' 
                        onChange={handleChange}
                        className={(errors.email)? styles.warning: null}/>

                    {(errors.email)?(
                    <p className={styles.danger}>{errors.email}</p>): null}
                </div>
                
                <div className={styles.form__password}>
                    <label htmlFor="#">Contraseña:</label>
                    <input 
                        value={userData.password} 
                        type="password" 
                        name='password' 
                        placeholder='contraseña'
                        onChange={handleChange}
                        className={(errors.password)? styles.warning: null}/>

                    {(errors.password)?(
                    <p className={styles.danger}>{errors.password}</p>): null}
                </div>

                <Button type='submit' text="Submit"/>
            </div>
        </div>
    </form>
  )
}

export default Form