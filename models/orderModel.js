const mongoose=require("mongoose")


const orderSchema=new mongoose.Schema({
    foods:[{type:mongoose.Schema.Types.ObjectId,ref:"Food"}],
    paymentType:{type:String,default:""},
    paymentStatus:{type:String,default:""},
    buyer:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    orderStatus:{type:String,
        enum:["preparing","prepared","on the way","deliverd","cancelled"],
        default:"preparing"
    },
    orderDate:{type:Date,default:Date.now()},
    orderTime:{type:String,default:""},
    deliveryDate:{type:Date,default:Date.now()},
    deliveryTime:{type:String,default:""},
    deliveryAddress:{type:String,default:""},
    deliveryLat:{type:Number,default:0},
    deliveryLng:{type:Number,default:0},
    deliveryCharge:{type:Number,default:0},
    totalAmount:{type:Number,default:0},
    isDiscount:{type:Boolean,default:false},
    discountType:{type:String,default:""},
    discount:{type:Number,default:0},
    discountDescription:{type:String,default:""},
    isFastDelivery:{type:Boolean,default:false},
    fastDeliveryCharge:{type:Number,default:0},
    fastDeliveryDescription:{type:String,default:""},
    isCancelled:{type:Boolean,default:false},
    cancelReason:{type:String,default:""},
    cancelBy:{type:String,default:""},
    cancelDate:{type:Date,default:Date.now()},
    cancelTime:{type:String,default:""},
})


module.exports=mongoose.model("Order",orderSchema)