import SearchBar from "../SearchBar/SearchBar.jsx"
import {Link, useLocation} from 'react-router-dom'
import styles from './Nav.module.css'
import img__nav from './Rick_and_Morty.png';

const Nav = (props) => {
    const actualLocation = useLocation().pathname;

    return (actualLocation !== '/')?(
        <nav className={styles.nav__container}>
            <img className={styles.img__nav} src={img__nav} alt="logo" />
            <ul className={styles.nav}>
                <li>
                    <Link className={styles.link} to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to='/home'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} to='/favorites'>
                        Favorites
                    </Link>
                </li>
                <li onClick={props.logOut}>Log Out</li>
            {!actualLocation.startsWith('/deatil/') && !actualLocation.startsWith('/about') && !actualLocation.startsWith('/favorites') && <SearchBar onSearch={props.onSearch}/>}
            </ul>
    </nav>
    ): null;
}

export default Nav