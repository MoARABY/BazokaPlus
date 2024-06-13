const catModel=require("../models/categoryModel")
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorized}=require("../utils/verifyToken")




const createCategory = async(req,res)=>{
    try {
        const {title}=req.body
        if(!title) return res.status(400).json("Title is required")
        const newCat=await new catModel(req.body).save()
        newCat ? res.status(201).json(newCat) : res.status(400).json("Category not created")
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const getCategries = async(req,res)=>{
    try {
        const categories=await catModel.find().sort({createdAt:-1})
        categories ? res.status(200).json(categories) : res.status(404).json("No category found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getCategory = async(req,res)=>{
    try {
        const category=await catModel.findById(req.params.id)
        category ? res.status(200).json(category) : res.status(404).json("No category found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateCategory = async(req,res)=>{
    try {
        const category= await catModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        category ? res.status(200).json(category) : res.status(404).json("No category found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteCategory = async(req,res)=>{
    try {
        const category= await catModel.findByIdAndDelete(req.params.id)
        category ? res.status(200).json("Category deleted") : res.status(404).json("No category found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports={createCategory,getCategries,getCategory,updateCategory,deleteCategory}