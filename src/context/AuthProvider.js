import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth'


export const AuthContext=createContext();

const auth=getAuth(app)

const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const SignIn=(email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUser=(userInfo)=>{
    return updateProfile(user,userInfo);
}

  const logOut=()=>{
    setLoading(true);
    return signOut(auth);
}

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,currentUser =>{
        console.log('user observing');
        setUser(currentUser);
        setLoading(false);
    });

    return ()=>unsubscribe();
},[])

  

const authInfo={
    createUser,
    SignIn,
    user,
    logOut,
    loading,
    updateUser
}

  return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;