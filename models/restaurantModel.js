const mongoose=require("mongoose")


const restaurentSchema=new mongoose.Schema({
    title:{type:String,required:[true,"Restaurant title is required"]},
    imgUrl:{type:String,default:""},
    foods : {type:Array,default:[]},
    time:{type:String,default:""},
    pickup:{type:Boolean,default:true},
    delivery:{type:Boolean,default:true},
    isOpen:{type:Boolean,default:true},
    logoUrl:{type:String,default:""},
    rating:{type:Number,default:1,max:5,min:1},
    ratingCount:{type:Number,default:0},
    coords:{
        id:{type:String,default:""},
        lat:{type:Number,default:0},
        latDelta:{type:Number,default:0},
        lng:{type:Number,default:0},
        lngDelta:{type:Number,default:0},
        address:{type:String,default:""},
        title:{type:String,default:""}
    },
})


module.exports=mongoose.model("Restaurant",restaurentSchema)