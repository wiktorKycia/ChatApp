import ChatBox from "./Components/ChatBox/ChatBox.jsx"
import CheckIn from "./Components/CheckIn/CheckIn.jsx"

import React, {useState, createContext} from 'react';

export const CheckContext = createContext();

function App() {
    const [isCheckedIn, setIsCheckedIn] = useState(false);
    const [userName, setUserName] = useState("");
    return (
        <>
            <div>{userName}</div>
            {isCheckedIn ? <ChatBox/> : <CheckContext.Provider value={[setIsCheckedIn, setUserName]}><CheckIn /></CheckContext.Provider>}
        </>
    )
}

export default App
