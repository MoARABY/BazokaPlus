const userModel=require("../models/userModel")
const JWT=require("jsonwebtoken")
const bcrypt=require("bcrypt")

const getUsers = async(req,res)=>{
    try {
        const Users=await userModel.find()
        Users ? res.status(200).json(Users) : res.status(400).json("Users Not Found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getUser = async(req,res)=>{
    try {
        const user=await userModel.findById(req.params.id)
        if(!user) return res.status(400).json("User Not Found")
        user.password=undefined
        return res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateUser = async(req,res)=>{
    try {
        const updateUser=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updateUser) return res.status(400).json("User Not Found")
            updateUser.password=undefined
            return res.status(200).json(updateUser)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteProfile = async(req,res)=>{
    try {
        const deleteProfile=await userModel.findByIdAndDelete(req.params.id)
        deleteProfile ? res.status(200).json("User Deleted Succesfully") : res.status(400).json("User Not Found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updatePassword=async(req,res)=>{
    try {
        const findUser=await userModel.findById(req.params.id)
        if(!findUser) return res.status(400).json("User Not Found")
        // update
        const{oldPass,newPass}=req.body
        if(!oldPass || !newPass){return res.status(500).json("Please Provide Old or New PasswOrd")}
        const isMatch=bcrypt.compare(oldPass,findUser.password)
        if(!isMatch){return res.status(400).json("Invalid old password")}
        salt= await bcrypt.genSalt(10)
        newHashPass=await bcrypt.hash(newPass,salt)
        const updateUser=await userModel.findByIdAndUpdate(req.params.id,{password:newHashPass},{new:true})
        updateUser ? res.status(200).json("Password Updated Successfully") : res.status(500).json("Cannot Update Pasword")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const resetPassword=async(req,res)=>{
    try {
        const{email,newPass,answer}=req.body
        if(!email || !newPass || !answer ){return res.status(400).json("Please Provide All Fields")}
        const user=await userModel.findOne({email,answer})
        if(!user){res.status(400).json("User Not Found Or Invalid Answer")}
        salt=await bcrypt.genSalt(10)
        newHashPass=await bcrypt.hash(newPass,salt)
        const updateUser=await userModel.findByIdAndUpdate(req.params.id,{password:newHashPass},{new:true})
        updateUser ? res.status(200).json("Password Reset Successfully") : res.status(500).json("Cannot Reset Pasword")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports={getUsers,getUser,updateUser,deleteProfile,updatePassword,resetPassword}