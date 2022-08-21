import React from 'react';  
import {useState} from "react";
//import { u } from 'tar';
import axios from "axios";
function Login()
{
const[user,updateuser]=useState("");
const[pass,updatepass]=useState("");
const[usererr,setusererr]=useState(false);
const[passerr,setpasserr]=useState(false);
function loginhandler(e){
e.preventDefault();

if(user.length<3||pass.length<3)
{
  alert("no blank values allowed");
}
else{
   console.log("ok");
  
  axios.post("http://localhost:9002/login");
  
  }
}

function userhandler(e)
{
 
let item=e.target.value.trim();
updateuser(item);
if(item.length<3)
{
  e.target.style.border="6px solid red";
  console.warn("invalid");
setusererr(true);

}

else{
  e.target.style.border="1px solid black";
setusererr(false);

}
}

function passhandler(e){

  let i=e.target.value.trim();
  updatepass(i);
  if(i.length<6)
  {
    e.target.style.border="6px solid red";
    console.warn("invalid");
  setpasserr(true);

}
else{
  setpasserr(false);
  e.target.style.border="1px solid black";
}}
return(
<>
<form className='R' onSubmit={loginhandler}>
      <input type="text" placeholder="Enter your name" id="u"  onChange={userhandler}></input>{usererr?<label for="u" >user not valid</label>:""} <br></br>
      <input type="password" placeholder="Enter password" id="p" onChange={passhandler}></input>{passerr?<label for="p">password should be greater than 5 characters</label>:""}<br></br>
      <button type="submit">submit</button>
    </form>


</>
);
}
export default Login;