import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

let socket;

const Chat  = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000';
    
    useEffect(()=>{
        const {name, room} = queryString.parse(location.search);
        socket = io(ENDPOINT);
        setRoom(room);
        setName(name);
        socket.emit('join', {name, room}, ()=>{
        });
        return ()=>{
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search ]);

    useEffect(()=>{
        socket.on('message', (msg)=>{
            console.log(msg);            
            setMessages([...messages, msg]);
            console.log(messages);   
        })
        // console.log(message, messages);   
         
    }, [messages]);
    

    const sendMessage = (event) =>{
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, ()=> setMessage('') );
        }
    }

    // console.log(socket);
    return (
        <div className="outerContainer">
            <div className="container">
                <input 
                value={message} 
                onChange={(event)=>setMessage(event.target.value)} 
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event): null}
                />
            </div>
        </div>
    )
}

export default Chat;