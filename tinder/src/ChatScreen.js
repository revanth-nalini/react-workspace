import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import './ChatScreen.css'

function ChatScreen() {

    const[input,setInput] = useState('');
    const[messages,setMessages] = useState([
        {
            name : 'Revanth',
            image : '...',
            message : 'whats up ?'
        },
        {
            message : 'I am fine'
        },
        {
            name : 'Revanth',
            image : '...',
            message : 'Well Good'
        }
    ]);

    const handleSend = e =>{
        e.preventDefault();
        setMessages([...messages, { message : input }]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Revanth on 12/11/2020</p>
            {
                messages.map(message=>(
                    message.name ? (
                        <div className="chatScreen__message">
                            <Avatar 
                                className="chatScreen__icon"
                                alt={message.name}
                                src={message.url}
                            />
                            <p className="chatScreen__text">{message.message}</p>
                        </div>   
                    ) : (
                        <div className="chatScreen__message">
                            <p className="chatScreen__textUser">{message.message}</p>
                        </div>   
                    )
                ))
            }

                <form className="chatScreen__input">
                    <input type="text" className="chatScreen__inputField" value={input} onChange={e=>setInput(e.target.value)}  placeholder="Type a message" ></input>
                    <button className="chatScreen__inputButton" onClick={handleSend}>SEND</button>
                </form>


        </div>
    )
}

export default ChatScreen
