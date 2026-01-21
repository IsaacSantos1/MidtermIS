import styles from '../styles/Hero.module.css'
import bg1 from '../assets/background.jpg'
function Hero() {

    return(
        <div className={styles.hero1}>
            <img className={styles.backgroundImg} src={bg1} />
            <div className={styles.overlay1}>
                <h2>Our Mission</h2>
                <h4>Handpicked, Artisanally Curated, Free Range, Sustainable, Small Batch, Fair Trade, Organic Tea</h4>
            </div>
        </div>
    );
}

export default Hero