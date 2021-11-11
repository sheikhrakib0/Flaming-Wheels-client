import { useEffect, useState } from "react";
import initializeAuth from "../pages/Login/Firebase/Firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";




initializeAuth();

const useFirebase =()=>{
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();

  const GoogleProvider = new GoogleAuthProvider();

  //Google SignIn
  const signInUsingGoogle = ()=>{
    return signInWithPopup(auth, GoogleProvider)
    
  }

  // Email register
  const registerUser = (email, password, name, history) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(res =>{
      const newUser = {email: email, displayName: name};
      setUser(newUser)
      //update user profile
      updateProfile(auth.currentUser,{
        displayName: name, email: email
      }).then(()=>{
        setError('');
      }).catch(error=>{
        setError(error.message);
      });
      //------update end ---
      history.replace('/home');
    })
    .catch(error=>setError(error.message))
  }
  //email login
  const signInWithEmail = (email, password, location, history) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError('');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      })
  }
  //Logout 
  const logout =()=>{
    signOut(auth).then(()=>{
      setError('');
    }).catch(error=>setError(error.message))
  }

  // monitoring the stateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
    });
    return () => unsubscribe;
  }, [])

  return{
    user, setUser,
    error, setError,
    signInUsingGoogle,
    registerUser, logout,
    signInWithEmail
  }
}
export default useFirebase;