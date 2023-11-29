import React from 'react'
import { useState } from 'react'
import { auth } from "../../Firebase/firebase";
import {createUserWithEmailAndPassword } from 'firebase/auth';
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) =>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{console.log(userCredential)})
        .catch((error) =>{console.log(error)})

    }
    return (
        <React.Fragment>
            <div>
                <form onSubmit={handleSignUp}>
                    <input type='email' placeholder='Email...' value={email} onChange={(e) =>setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type='submit' />
                </form>
            </div>
        </React.Fragment>
    )
}

export default SignUp
