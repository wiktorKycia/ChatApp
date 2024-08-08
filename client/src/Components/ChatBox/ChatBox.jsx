import React from 'react'

function ChatBox(props) {
    return (
        <>
            <h1>Main Chat</h1>
            <article>
                {props.children}
            </article>
            <div>
                <input type="text" placeholder='Enter your message here'/>
                <button>Send</button>
            </div>
        </>
    )
}

export default ChatBox