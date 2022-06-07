import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () =>{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" objectFit="cover" alt="" layout="fill" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>FRESH BAKED PIZZA. SERVED HOT.</h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
                    <p className={styles.text}>
                        113, D Street
                        <br />New Delhi, 11101
                        <br />+91 98767 75534
                    </p>   
                    <p className={styles.text}>
                        113, D Street
                        <br />New Delhi, 11101
                        <br />+91 98767 75534
                    </p>   
                    <p className={styles.text}>
                        113, D Street
                        <br />New Delhi, 11101
                        <br />+91 98767 75534
                    </p>   

                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS </h1>
                    <p className={styles.text}>
                        MONDAY TO FRIDAY
                        <br />9:00 TO 22:00
                    </p>
                    <p className={styles.text}>
                        SATURDAY AND SUNDAY
                        <br />12:00 TO 24:00
                    </p> 
                </div>

            </div>
        </div>
    )
}
export default Footer;