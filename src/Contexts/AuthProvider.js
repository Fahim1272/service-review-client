import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInuser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const providerLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }
    const providerLogout = () =>{
        setLoading(true);
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe();
    },[])
    

    const authInfo = { user, loading, createUser, signInuser, providerLogin,providerLogout }
    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;