import React from 'react';
import Image from "next/image";
import styles from '../styles/PizzaCard.module.css';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src='/img/pizza.png' alt="" width="500" height="500px" />
        <h1 className={styles.title} >PIZZA</h1>
        <span className={styles.price}>$5.59</span>
        <p className={styles.desc}>Icing muffin soufflé carrot cake apple pie sweet roll 
            candy.
        </p>
    </div>
  )
}

export default PizzaCard