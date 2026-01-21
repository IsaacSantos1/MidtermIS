import styles from '../Styles/Tea.module.css';  
import p1 from '../assets/Teas/1.jpg';
import p2 from '../assets/Teas/2.jpg';
import p3 from '../assets/Teas/3.jpg';
import p4 from '../assets/Teas/4.jpg';
import p5 from '../assets/Teas/5.jpg';



function Tea(){
    return(
        <>
        <div className={styles.container}>
        <div className={styles.text}>
        <h1>Tea of the Month</h1>
        <h2>Whats Steeping at The Tea Cozy?</h2>

        </div>
        <div className={styles.teaContainer}>
            <div className={styles.Item}>
                <img src={p1} className ={styles.teaImage}/>
                <p> Fall Berry Blitz Tea</p>
            </div>

            <div className={styles.Item}>
                <img src={p2} className ={styles.teaImage}/>
                <p> Spiced Rum Tea</p>
            </div>

            <div className={styles.Item}>
                <img src={p3} className ={styles.teaImage}/>
                <p> Seasonal Donuts</p>
            </div>

            <div className={styles.Item}>
                <img src={p4} className ={styles.teaImage}/>
                <p> Myrtle Ave Tea</p>
            </div>

            <div className={styles.Item}>
                <img src={p5} className ={styles.teaImage}/>
                <p> Bedford Bizarre Tea</p>
            </div>
        </div>
        </div>
       
        </>
    )
}
export default Tea;