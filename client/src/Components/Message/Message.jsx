import React from 'react'
import PropTypes from 'prop-types'
import styles from './Message.module.css'

function Message(props) {
    return (
        <div className={styles.message}>
            <p className={styles.date}>{props.date}</p>
            <p className={styles.text}>{props.text}</p>
            <p className={styles.author}>{props.author}</p>
        </div>
    )
}
Message.propTypes = {
    text : PropTypes.string,
    author : PropTypes.string,
    date : PropTypes.instanceOf(Date)
}
Message.defaultProps = {
    text : "could not load message",
    author : "could not load author",
    date : "string"
}
export default Message