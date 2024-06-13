const foodModel=require("../models/foodModel")


const createFood = async(req,res)=>{
    try {
        const {title}=req.body
        if(!title) return res.status(400).json("Title is required")
        const newFood=await foodModel.create(req.body)
        newFood ? res.status(201).json(newFood) : res.status(400).json("Food not created")
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const getFoods = async(req,res)=>{
    try {
        const foods=await foodModel.find().sort({createdAt:-1})
        foods ? res.status(200).json(foods) : res.status(404).json("No food found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getFoodByRestaurant = async(req,res)=>{
    try {
        const foods=await foodModel.find({restaurantId:req.params.restaurantId}).sort({createdAt:-1})
        foods ? res.status(200).json(foods) : res.status(404).json("No food found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getFoodByCategory = async(req,res)=>{
    try {
        const foods=await foodModel.find({categoryId:req.params.categoryId}).sort({createdAt:-1})
        foods ? res.status(200).json(foods) : res.status(404).json("No food found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const getFood = async(req,res)=>{
    try {
        const food=await foodModel.findById(req.params.id)
        food ? res.status(200).json(food) : res.status(404).json("No food found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateFood = async(req,res)=>{
    try {
        const food= await foodModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        food ? res.status(200).json(food) : res.status(404).json("No food found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const deleteFood = async(req,res)=>{
    try {
        const food= await foodModel.findByIdAndDelete(req.params.id)
        food ? res.status(200).json("Food deleted") : res.status(404).json("No food found")
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports={createFood,getFoods,getFoodByRestaurant,getFoodByCategory,getFood,updateFood,deleteFood}