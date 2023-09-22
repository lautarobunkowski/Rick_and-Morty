import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions";
import Card from "../../components/Card/Card.jsx";
import styles from "./Favorites.module.css";

const Favorites = () => {
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        setAux(!aux);
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    useEffect(() => {
        return 
    },[])

    const favorites = useSelector(state => state.favorites);
    return (
        <div className={styles.cards__container}>
            <div className={styles.selector__container}>
                <select className={styles.selector__order} onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select className={styles.selector__filter} onChange={handleFilter}>
                    <option value='All'>All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            {
                favorites.map(char => {
                    return (<Card
                        id={char.id}
                        key={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin.name}
                        image={char.image}
                    />)
                })
            }
        </div>
    )
}

export default Favorites