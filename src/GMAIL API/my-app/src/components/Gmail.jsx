import { useState } from "react"
import axios from "axios";
const Gmail=()=>{

    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    // const email = "joselie2208@gmail.com";
    const [pesan, setPesan] = useState("");
    const [file, setFile] = useState("");
    const baseUrl="https://localhost:3000";

    function sendGmail(){
        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("email", email);
        formData.append("pesan", pesan);
        formData.append("file", file);

        axios.post(`${baseUrl}/email/sendEmail`, formData, {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res.data);
                console.log(res.status);
                if (res.status > 199 && res.status < 300){
                    alert("Email berhasil dikirim");
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return(
        <div>
            <input type="text" id="nama" placeholder="Nama" onChange={(event)=>setNama(event.target.value)}></input>
            <input type="text" id="email" onChange={(event)=>setEmail(event.target.value)}></input>
            <input type="text" id="pesan" placeholder="Pesan" onChange={(event)=>setPesan(event.target.value)}></input>
            <input type="file" id="file" onChange={(event)=>setFile(event.target.files[0])}></input>
            <button onClick={sendGmail}>sendGmail</button>
        </div>
    )
}

export default Gmail;