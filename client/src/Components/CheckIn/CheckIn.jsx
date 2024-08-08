import styles from './CheckIn.module.css'
import React from 'react'

function CheckIn() {
    return (
        <section className={styles.container}>
            <input className={styles.input} type="text" name="username" id="username" placeholder='Enter your username'/>
            <button className={styles.button}>Check in</button>
        </section>
    )
}

export default CheckIn;