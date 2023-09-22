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
                        <Link target="_blank" className={styles.instagram} to='https://www.instagram.com/lautarobunkowski/'>
                            <BiLogoInstagram/>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" className={styles.facebook} to='https://www.facebook.com/lautaro.bunkowski.9'>
                            <BiLogoFacebookCircle/>
                        </Link>
                    </li>
                    <li>
                        <Link target="_blank" className={styles.linkedin} to='https://www.linkedin.com/in/lautaro-bunkowski-4830b6161'>
                            <BiLogoLinkedin/>
                        </Link>
                    </li>
                </ul>
            </div>
            : null
    )
}

export default Footer