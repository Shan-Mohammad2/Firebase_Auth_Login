import React from 'react'
import {Button} from "react-bootstrap";
import { useUserAuth } from '../context/UserAuthContext';
import {useNavigate } from "react-router-dom";

function Home() {
  //display email id
  const { user, logOut } =useUserAuth();
  console.log(user);
  const navigate=useNavigate();

  const handleClick= async()=>{
     try{
     await logOut()
     navigate("/");
   } catch (err){
     console.log(err.message);
   }
 }
  return (
    <div>
      <div className="p-4 box mt-3 text-center">Hello Welcome
      <br />
      {
        user && user.email
      }

      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleClick}>Log Out</Button>
      </div>
    </div>
    

    
  )
};
// console.log("hey");
export default Home;