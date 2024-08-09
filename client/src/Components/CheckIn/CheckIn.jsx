import styles from './CheckIn.module.css'
import React, {useContext} from 'react'
import {CheckContext} from '../../App.jsx'


function CheckIn() {
    const contextValues = useContext(CheckContext);
    const setIsCheckedIn = contextValues[0];
    const setUserName = contextValues[1];


    function check()
    {
        let username = document.getElementById("username");
        let user = username.value;
        if (user === "")
        {
            alert("Please enter your username");
        }
        else
        {
            setIsCheckedIn(true);
            setUserName(user);
        }
    }


    return (
        <section className={styles.container}>
            <input className={styles.input} type="text" name="username" id="username" placeholder='Enter your username'/>
            <button className={styles.button} onClick={check}>Check in</button>
        </section>
    )
}

export default CheckIn;