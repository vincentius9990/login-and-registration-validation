
import './App.css';
import React from 'react';  
import {useState} from "react";
import axios from "axios";
function A() {
  const[usererr,setusererr]=useState(false);
  const[user,updateuser]=useState("");
  const[pass,updatepass]=useState("");
  const[passerr,setpasserr]=useState(false);
const[contact,setcontact]=useState("");
const[contacterr,setcontacterr]=useState(false);
const[email,updateemail]=useState("");
const[emailerr,setemailerr]=useState(false);
const[location,setlocation]=useState("");
const[confirmpass,setconfirmpass]=useState("");
const[confirmpasserr,setconfirmpasserr]=useState(false);
const[DOB,setDOB]=useState("");
const[DOBerr,sDOBerr]=useState(false);
const arr=[];
function handlesubmit(e)
  {

e.preventDefault();
if(user.length<3||pass.length<3||location==""||email==""||contact=="")
{
  alert("no blank values allowed");
  
}
else{
   console.log("ok");
   axios.post("http://localhost:9002/login",arr[6])
   .then(res=>console.log(res));
  }

if(pass==confirmpass)
{
  console.log("ok");
}
else{
  alert("both passwords must be same");
}
  }
    function userhandler(e)
    {
   
  const item=e.target.value.trim();
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
  arr[0]=[...arr,item];
  }
      } 

function passhandler(e)
{
const i=e.target.value.trim();
updatepass(i);
if(i.length<=6)
{
setpasserr(true);
e.target.style.border="6px solid red";
}
else{

setpasserr(false);
e.target.style.border="1px solid black";
arr[5]=[...arr,i];


}
}
function contacthandler(e)
{
const c=e.target.value;
setcontact(c);
var regx=/^[7-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
if(regx.test(c))
{
console.log("ok");
e.target.style.border="1px solid black";
setcontacterr(false);
arr[1]=[...arr,c];
}
else
{
  setcontacterr(true);
  e.target.style.border="6px solid red";
  
}
}

function emailhandler(e)
{
const em=e.target.value;
updateemail(em);
var regx=/^([a-zA-Z0-9\.]+)@([a-zA-Z0-9]+).([a-z]{3,10})$/;
if(regx.test(em))
{
console.log("ok");
e.target.style.border="1px solid black";
setemailerr(false);
arr[2]=[...arr,em];
}
else
{
  setemailerr(true);
  e.target.style.border="6px solid red";
}
}
function locationhandler(e)
{
const l=e.target.value;
setlocation(l);
arr[3]=[...arr,l];
}

function confirmpasshandler(e)
{
const confirm=e.target.value;
setconfirmpass(confirm);
if(confirm.length<7)
{
e.target.style.border="6px solid red";
setconfirmpasserr(true);
}
else
{
  setconfirmpasserr(false);
  e.target.style.border="1px solid black";
}
}

function DOBhandler(e)
{
const d=e.target.value;
setDOB(d);
if(setDOB=="")
{
  e.target.style.border="6px solid red";
sDOBerr(true);
}
else
{
  e.target.style.border="1px solid black";
  sDOBerr(false);
  arr[4]=[...arr,d];
}
}

  return (
    <>
<form className='R' on onSubmit={handlesubmit}>
      <input name ="username"id="u"type="text" placeholder="Enter username" onChange={userhandler}></input> {usererr?<label for="u" >user not valid</label>:""}<br></br>
      <input id="c" type="number" placeholder="Enter your contact number"  onChange={contacthandler}></input>{contacterr?<label for="c" >invalid number</label>:""}<br></br>
      <input type="email" name="email" id="ema" placeholder="Enter your emailid" onChange={emailhandler} ></input>{emailerr?<label for="ema" >invalid email</label>:""}<br></br>
      <input type="text" placeholder="Enter your address and location" onChange={locationhandler}></input><br></br>
      <input type="date" placeholder="Enter your DOB" onChange={DOBhandler} ></input>{DOBerr?<label for="ema" >enter DOB</label>:""}<br></br>
      <input type="password" id ="p"placeholder="Enter password"  onChange={passhandler}></input>{passerr?<label for="p" >password must have more than 6 characters</label>:""}<br></br>
      <input type="password" name="password"placeholder="confirm password" id ="cp"onChange={confirmpasshandler} ></input>{confirmpasserr?<label for="cp" >reenter the password</label>:""}<br></br>
      <button type="submit">submit</button>
  </form>
</>

 );
}
export default A;
