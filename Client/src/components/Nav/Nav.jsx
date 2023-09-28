import SearchBar from "../SearchBar/SearchBar.jsx"
import {Link, NavLink, useLocation} from 'react-router-dom'
import styles from './Nav.module.css'
import img__nav from './Rick_and_Morty.png';

const Nav = (props) => {
    const actualLocation = useLocation().pathname;

    return (actualLocation !== '/')?(
        <nav className={styles.nav__container}>
            <Link to='/home'>
                <img className={styles.img__nav} src={img__nav} alt="logo" />
            </Link>
            <ul className={styles.nav}>
                <li>
                    <NavLink className={styles.link} to='/home'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.link} to='/favorites'>
                        Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink className={styles.link} to='/about'>
                        About
                    </NavLink>
                </li>
                <li onClick={props.logOut}>
                    <NavLink className={styles.link} to='/'>
                        Log Out
                    </NavLink>
                </li>
            {!actualLocation.startsWith('/deatil/') && !actualLocation.startsWith('/about') && !actualLocation.startsWith('/favorites') && <SearchBar onSearch={props.onSearch}/>}
            </ul>
    </nav>
    ): null;
}

export default Nav