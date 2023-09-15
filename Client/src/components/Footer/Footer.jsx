import {useLocation, Link} from 'react-router-dom'
import styles from "./Footer.module.css";
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedin, BiLogoGmail } from "react-icons/bi";

const Footer = () => {
    const actualLocation = useLocation().pathname;
    return (actualLocation !== '/'?
        <div className={styles.footer__container}>
                <ul className={styles.social__media}>
                    {/* <li>
                        <BiLogoGmail></BiLogoGmail>
                        <p>lautibunko@gmail.com</p>
                    </li> */}
                    <li>
                        <Link className={styles.instagram} to='/about'>
                            <BiLogoInstagram/>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.facebook} to='/about'>
                            <BiLogoFacebookCircle/>
                        </Link>
                    </li>
                    <li>
                        <Link className={styles.linkedin} to='/about'>
                            <BiLogoLinkedin/>
                        </Link>
                    </li>
                </ul>
            </div>
            : null
    )
}

export default Footer