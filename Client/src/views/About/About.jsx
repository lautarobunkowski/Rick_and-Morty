import styles from "./About.module.css";
import auto from "./rick_and_morty_auto.png";

const About = () => {
    return(
    <div className={styles.about__container}>
        <img className={styles.about__car} src={auto} alt="rick_and_morty_auto" />
        <div className={styles.about__page}>
            <p className={styles.about__pageA}>About page</p>
            <h3>Rick And Morty</h3>
            <p>"Rick and Morty" is an American animated science fiction sitcom created by Justin Roiland and Dan Harmon. The show premiered on December 2, 2013, on the Cartoon Network's late-night programming block, Adult Swim. It has gained significant popularity for its unique humor, clever storytelling, and imaginative concepts.<br/><br/>The series follows the adventures of an eccentric and alcoholic scientist named Rick Sanchez and his good-hearted but easily influenced grandson, Morty Smith. They embark on various interdimensional and intergalactic adventures, often getting entangled in bizarre and dangerous situations. The show explores complex themes such as existentialism, science fiction tropes, and family dynamics.</p>
        </div>
        <div className={styles.about__me}>
            <p className={styles.about__meA}>About Me</p>
            <h3>Lautaro Bunkowski</h3>
            <h4>Cursando en Henry (Fullstack Developer)</h4>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sint eveniet dolor perspiciatis illum neque saepe odio quae rem. Enim!</p>
        </div>
    </div>)
}

export default About;