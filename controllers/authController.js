const userModel=require("../models/userModel")
const JWT=require("jsonwebtoken")
const bcrypt=require("bcrypt")
require("dotenv").config()

const userRegister=async (req,res)=>{
    try {
        
    } catch (error) {
        res.status(500).json(error.message)
    }
    const{username,email,password}=req.body
    if(!username || !email || !password){
        return res.status(400).json("all fiels are menatory")
    }
    if(!email.includes("@")){
        return res.status(400).json("email !!")
    }
    if(password.length<6){
        return res.status(400).json("passwor !!")
    }

    const findUser=await userModel.findOne({email})
    if(findUser){
        return res.status(400).json("user !!")
    }
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    req.body.password=hashedPassword
    const newUser=await userModel.create(req.body)
    if (newUser){
        newUser.password=undefined
        return res.status(201).json({"user":newUser})
    }
}


const userLogin=async (req,res)=>{
    const{email,password}=req.body
    if(!email || !password){
        return res.status(400).json("all fiels are menatory")
    }
    const findUser=await userModel.findOne({email})
    if(!findUser){
        return res.status(400).json("user !!")
    }
    const comparePass=bcrypt.compare(password,findUser.password)
    if(!comparePass){
        return res.status(400).json("user !!")
    }
    const token=JWT.sign({id:findUser.id,type:findUser.userType},process.env.SECRET_KEY,{expiresIn:"3d"})
    res.cookie("Token",token,{
        httpOnly:true
    }).status(200).json("login successfuly")
}

module.exports={userRegister,userLogin}