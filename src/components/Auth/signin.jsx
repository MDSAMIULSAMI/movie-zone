import React from 'react'
import { useState } from 'react'
import { auth } from "../../Firebase/firebase";
import {signInWithEmailAndPassword } from 'firebase/auth';
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = (e) =>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) =>{console.log(userCredential)})
        .catch((error) =>{console.log(error)})

    }
    return (
        <React.Fragment>
            <div>
                <form onSubmit={handleSignIn}>
                    <input type='email' placeholder='Email...' value={email} onChange={(e) =>setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type='submit' />
                </form>
            </div>
        </React.Fragment>
    )
}

export default SignIn
