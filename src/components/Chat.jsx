import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    

    return (<>
        <div>Este es el chat</div>
    </>)
}