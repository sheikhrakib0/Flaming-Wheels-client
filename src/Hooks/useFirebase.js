import { useEffect, useState } from "react";
import initializeAuth from "../pages/Login/Firebase/Firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";




initializeAuth();

const useFirebase =()=>{
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();

  const GoogleProvider = new GoogleAuthProvider();

  //Google SignIn
  const signInUsingGoogle = ()=>{
    setLoading(true)
    return signInWithPopup(auth, GoogleProvider)
    
  }

  // Email register
  const registerUser = (email, password, name, history) =>{
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then(res =>{
      const newUser = {email: email, displayName: name};
      setUser(newUser)
      //save user to db
      saveUser(email, name, "POST");
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
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setError('');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      }).finally(()=>setLoading(false))
  }
  //Logout 
  const logout =()=>{
    setLoading(true);
    signOut(auth).then(()=>{
      setError('');
    }).catch(error=>setError(error.message))
    .finally(()=>setLoading(false))
  }

  // monitoring the stateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({})
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, [])

  //save user to safe db
  const saveUser = (email, displayName, method) =>{
    const user = {email, displayName};
    fetch('http://localhost:5000/users',{
      method: method,
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(user)
    })
  }

  // always keeping eye on email to see the admin status
  useEffect(()=>{
    fetch(`http://localhost:5000/users/${user.email}`)
    .then(res=>res.json())
    .then(data=>setAdmin(data.admin))
  },[user.email])

  return{
    admin,
    user, setUser,
    error, setError,
    loading, setLoading,
    signInUsingGoogle,
    registerUser, logout,
    signInWithEmail, saveUser
  }
}
export default useFirebase;