import React, {useState, useEffect} from 'react'
import styles from "./ChatBox.module.css"
import Message from "../Message/Message.jsx"
import {fetchData, postData} from "../../functions.js"

function ChatBox() {
    const [messages, setMessages] = useState([]);
    
    async function sendMessage() {
        const message = document.querySelector('input').value;
        const result = await postData('/sendMessage', {
            text: message,
            author: 'user',
            date: new Date().toLocaleTimeString()
        });
        console.log(result);
        getMessages();
    }

    async function getMessages() {
        const result = await fetchData('/getMessages');
        console.log(result);
        setMessages(result.messages);
    }

    useEffect(() => {
        getMessages()
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
                <input type="text" placeholder='Enter your message here'/>
                <button onClick={sendMessage}>Send</button>
            </div>
        </main>
    )
}

export default ChatBox