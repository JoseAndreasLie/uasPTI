import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Gmail.css';

const Gmail = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [pesan, setPesan] = useState('');
    const [subject, setSubject] = useState('Pesan dari ' + nama);
    const [file, setFile] = useState(null);
    const baseUrl = "http://localhost:3000";

    function sendEmail(e) {
        e.preventDefault();

        setSubject('Pesan dari ' + nama);

        const formData = new FormData();
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', pesan);
        formData.append('file', file);

        axios.post(`${baseUrl}/email/sendEmail`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data' 
        }
        })
        .then((res) => {
            console.log(res.data);
            console.log(res.status);
            if (res.status > 199 && res.status < 300) {
            alert("Send Successfully !");
            }
        })
        .catch((error) => {
            console.error(error);
            // Handle any errors that occurred during the request
        });
    }

    return (
        <div id="form-container">
            <form action="#" autocomplete="on">
                <h1 className='titleSend'>Send the Picture</h1>
                <input onChange={(event) => setNama(event.target.value)} className="name-box" type="text" name="name" placeholder="Name"/><br />
                <input onChange={(event) => setEmail(event.target.value)} className="email-box" type="email" name="email" input="email" placeholder="Email"/><br />
                <textarea onChange={(event) => setPesan(event.target.value)} className="message-box" placeholder="Message"></textarea><br />
                <input className='file' type="file" onChange={(event) => setFile(event.target.files[0])} />
                <button  onClick={sendEmail} className="bounceIn" type="submit">Send</button>
            </form>
        </div>
    );
    };

export default Gmail;