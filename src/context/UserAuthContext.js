import { createContext, useEffect, useState, useContext } from "react";
import {React} from "react"
import {
 createUserWithEmailAndPassword,
 signInWithEmailAndPassword,
 signOut,
 onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase";
// import Signin from "../components/Signin";
// import Login from "../components/Login";
const userAuthContext=createContext();

export function UserAuthContextProvider({children}){

    const [user, setUser]=useState("");
    function signUp(email,password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn(email,password){
        console.log(email)
        return signInWithEmailAndPassword (auth, email, password);
    }
    function logOut(){
      return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
         setUser(currentUser);
        });
        return ()=>{
            unsubscribe();
        }
    },[]);

    return (       
        <userAuthContext.Provider value={{user, signUp, logIn, logOut}}>
            {children}
        </userAuthContext.Provider>
        // <div>
        // <Firstcontext.Provider value={{signUp, user}} >
        //     <Secondcontext.Provider value={{logIn, user}}>
        //         <Signin />
        //     </Secondcontext.Provider>
        // </Firstcontext.Provider>
        // </div>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
// export const Firstcontext=React.createContext();
// export const Secondcontext=React.createContext();