import React from 'react'
// import PropTypes from 'prop-types'
import styles from './Message.module.css'

function Message({date="could not load date", text="could not load message", author="unknown user", right=false}) {
    return (
        <div className={styles.message}>
            <p className={styles.date}>{date}</p>
            <p className={styles.text}>{text}</p>
            <p className={styles.author}>{author}</p>
        </div>
    )
}
// Message.propTypes = {
//     text : PropTypes.string,
//     author : PropTypes.string,
//     date : PropTypes.string
// }
// Message.defaultProps = {
//     text : "could not load message",
//     author : "could not load author",
//     date : new Date().toLocaleTimeString()
// }
export default Message