import React, {useState, useEffect, useContext} from 'react'
import styles from "./ChatBox.module.css"
import Message from "../Message/Message.jsx"
import {fetchData, postData} from "../../functions.js"
import {UserContext} from '../../App.jsx'


function ChatBox() {
    const [messages, setMessages] = useState([]);
    const user = useContext(UserContext);
    
    async function sendMessage() {
        const message = document.querySelector('input').value;
        if (message == '') return;
        document.querySelector('input').value = '';

        const result = await postData('/message', {
            text: message,
            author: user,
            date: new Date().toLocaleTimeString()
        });
        console.log(result);
        setMessages(result.messages);
    }

    async function getMessages() {
        const result = await fetchData('/getMessages');
        console.log(result);
        setMessages(result.messages);
    }

    useEffect(() => {
        getMessages()
        document.querySelector('input').addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                sendMessage();
            }
        })
        // return () => {
        //     document.querySelector('input').removeEventListener('keyup')
        // }
    }, [])

    return (
        <main>
            <h1 className={styles.h1}>Main Chat</h1>
            <article className={styles.article}>
                {messages.map((message, index) => (
                    <Message key={index} text={message.text} author={message.author} date={message.date} />
                ))}
            </article>
            <div className={styles.div}>
                <input type="text" placeholder='Enter your message here' autoFocus/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </main>
    )
}

export default ChatBox