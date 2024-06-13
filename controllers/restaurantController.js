const restModel=require("../models/restaurantModel")

const createRestaurent = async(req,res)=>{
    try {
        const {title}=req.body
        if(!title) return res.status(400).json("Title is required")
        const newRest=await new restModel(req.body).save()
        newRest ? res.status(201).json(newRest) : res.status(400).json("Restaurent not created")
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const getRestaurents = async(req,res)=>{
    try {
        const restaurents=await restModel.find().sort({createdAt:-1})
        restaurents ? res.status(200).json(restaurents) : res.status(404).json("No restaurent found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getRestaurent = async(req,res)=>{
    try {
        const restaurent=await restModel.findById(req.params.id)
        restaurent ? res.status(200).json(restaurent) : res.status(404).json("No restaurent found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateRestaurent = async(req,res)=>{
    try {
        const restaurent= await restModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        restaurent ? res.status(200).json(restaurent) : res.status(404).json("No restaurent found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteRestaurent = async(req,res)=>{
    try {
        const restaurent= await restModel.findByIdAndDelete(req.params.id)
        restaurent ? res.status(200).json("Restaurent deleted") : res.status(404).json("No restaurent found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports={createRestaurent,getRestaurents,getRestaurent,updateRestaurent,deleteRestaurent}