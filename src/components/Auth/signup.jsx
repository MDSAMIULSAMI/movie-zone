import React, { useState } from 'react';
import { auth, db } from "../../Firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [displayName, setDisplayName] = useState("");

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            // Create user in Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            
            // Update display name
            const user = userCredential.user;
            await updateDisplayName(user);

            // Create a new document in Firestore
            await createUserDocument(user.uid, displayName, email);

            console.log("User signup successful:", userCredential);
        } catch (error) {
            console.error("Error during signup:", error);
        }
    }

    const updateDisplayName = async (user) => {
        // Update the user's display name in Firebase
        await updateProfile(user, { displayName: displayName });
    }

    const createUserDocument = async (uid, displayName, email) => {
        const userRef = doc(db, 'users', uid); // 'users' is the collection name
        await setDoc(userRef, {
            displayName: displayName,
            email: email,
            // store additional user information here
        });

        console.log("User document created in Firestore");
    }

    return (
        <React.Fragment>
            <div>
                <form onSubmit={handleSignUp}>
                    <input type='text' placeholder='Name...' value={displayName} onChange={(e) => setDisplayName(e.target.value)}/>
                    <input type='email' placeholder='Email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type='password' placeholder='Password...' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type='submit' />
                </form>
            </div>
        </React.Fragment>
    )
}

export default SignUp;
