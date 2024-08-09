import ChatBox from "./Components/ChatBox/ChatBox.jsx"
import CheckIn from "./Components/CheckIn/CheckIn.jsx"
import Message from "./Components/Message/Message.jsx";

import React, {useState, createContext} from 'react';

export const CheckContext = createContext();

function App() {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [userName, setUserName] = useState("");
    return (
        <>
            <div>{userName}</div>
            {isCheckedIn ? <ChatBox>
                <Message date={new Date().toLocaleTimeString()} text={"lorem ipsum dolor sit amet consectetur adipiscing elit suscipit facilisis hendrerit sagittis suscipit hendrerit hendrerit hendrerit hendrerit"} author={"author"}/>
                <Message date={new Date().toLocaleTimeString()} text={"lorem"}/>
                <Message date={new Date().toLocaleTimeString()} author={"yurmom"}/>
                <Message date={new Date().toLocaleTimeString()} text={"stop posting shit \n please"} author={"admin"}/>
            </ChatBox> : <CheckContext.Provider value={[setIsCheckedIn, setUserName]}><CheckIn /></CheckContext.Provider>}
        </>
    )
}

export default App
