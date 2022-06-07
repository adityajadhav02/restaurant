import styles from '../styles/PizzaList.module.css';
import PizzaCard from './PizzaCard';

import React from 'react'

const Pizzalist = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}> Icing muffin soufflé carrot cake apple pie sweet roll 
            candy macaroon. Gingerbread powder tiramisu powder bonbon. Lemon drops marzipan
            sugar plum brownie liquorice.
        </p>
        <div className={styles.wrapper}>
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
            <PizzaCard />
        </div>
    </div>
  )
}

export default Pizzalist