import styles from './CheckIn.module.css'
import React, {useContext} from 'react'
import {CheckContext} from '../../App.jsx'
import { postData } from '../../functions.js';


function CheckIn() {
    const contextValues = useContext(CheckContext);
    const setIsCheckedIn = contextValues[0];
    const setUserName = contextValues[1];


    async function check()
    {
        let username = document.getElementById("username");
        let user = username.value;
        if (user === "")
        {
            alert("Please enter your username");
        }
        else
        {
            
            const newUser = { username: user };
            const result = await postData('/checkIn', newUser);
                
                
            
            
            console.log(result);
            console.log(result.message);

            if(result.message == "success"){
                setIsCheckedIn(true);
                setUserName(user);
            } else if (result.message === "fail") {
                alert(`User of name ${user} already exists`);
                setUserName("");
                username.value = "";
            } else {
                alert("Something went wrong. Please try again later");
            }
            
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