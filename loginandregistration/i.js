const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");

 const app=express();
 app.use(express.json());
 app.use(express.urlencoded());
 app.use(cors());
mongoose.connect('mongodb://localhost:27017/myloginregisterDB',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>console.log("DB connected"));


const userschema=new mongoose.Schema({
    name:String,
    contact:Number,
    email:String,
    location:String,
    DOB:Date,
    password:String
})
const user =new mongoose.model("user",userschema)

//routes
app.post("/",(req,res)=>{
const {name,contact,email,location,DOB,password}=req.body
    user.findone({name:name},(err,user)=>
{
if(user){res.send({message:"user already registered"})}
else{
    const user =new user({
        name:name,
        contact:contact,
        email:email,
        location:location,
        DOB:DOB,
        password:password
        })
        user.save(err=>{//to store details in the database
         if(err){
            res.send(err)
           }
           else{
        
        res.send({message:"successful",user})//where 
        
           } }) } }) })
app.post("/login",(req,res)=>{
    res.send("my API login");
    
    })
app.post("/A",(req,res)=>{
        console.log(req.body);
        
        })
app.listen(9002,()=>{
console.log("BE started at port 9002");

})