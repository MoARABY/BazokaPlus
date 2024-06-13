const mongoose=require("mongoose")


const userSchema=new mongoose.Schema({
    username:{type:String,required:[true,"username is required"]},
    email:{type:String,required:[true,"email is required"],unique: true},
    password:{type:String,required:[true,"password is required"],min:6},
    phone:{type:String},
    address:{type:String},
    userType:{
        type:String,
        required:[true,"Must Choose Type"],
        default:"client",
        enum:["client","admin","vendor","driver"]
    },
    profile: {
        type: String,
        default:
        "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
    },
    answer: {
        type: String,
        // required: [true, "Asnwer is required"],
    },
},{timestamps:true})  

module.exports=mongoose.model("User",userSchema)