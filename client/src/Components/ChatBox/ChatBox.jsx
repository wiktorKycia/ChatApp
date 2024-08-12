import React from 'react'
import styles from "./ChatBox.module.css"
import Message from "./Message.jsx"

function ChatBox() {
    return (
        <main>
            <h1 className={styles.h1}>Main Chat</h1>
            <article className={styles.article}>
                {}
            </article>
            <div className={styles.div}>
                <input type="text" placeholder='Enter your message here'/>
                <button>Send</button>
            </div>
        </main>
    )
}

export default ChatBox