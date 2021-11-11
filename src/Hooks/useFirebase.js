import { useState } from "react";
import initializeAuth from "../pages/Login/Firebase/Firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";




initializeAuth();

const useFirebase =()=>{
  const [user, setUser] = useState({});

  const auth = getAuth();

  const GoogleProvider = new GoogleAuthProvider();

  //Google SignIn
  const signInUsingGoogle = ()=>{
    return signInWithPopup(auth, GoogleProvider)
    
  }

  // Email Login
  const loginWithEmail = () =>{
    
  }

  return{
    user, setUser,
    signInUsingGoogle
  }
}
export default useFirebase;