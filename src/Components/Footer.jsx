import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <>
    <footer>
    <div className= {styles.cen}>
   <h1> The Tea Cozy</h1>
   <h5> contact@theteacozy.com </h5>
   <h5>917-555-8904</h5>
   </div>

    <div className={styles.copy}>
        <h5>copyright The Tea Cozy 2017</h5>
    </div>
    </footer>
   
   </>
  );
}
export default Footer;