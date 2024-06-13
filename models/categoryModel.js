const mongoose=require("mongoose")


const categorySchema=new mongoose.Schema({
    title:{type:String,required:[true,"Category title is required"]},
    imgUrl:{type:String,default:""}
})


module.exports=mongoose.model("Category",categorySchema)