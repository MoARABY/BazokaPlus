const orderModel=require("../models/orderModel")



const placeOrders = async(req,res)=>{
    try {
        // const {cart,payment}=req.body
        // if(!cart || !payment){return res.status(400).json({message:"should provide cart or payment"})}
        // if(cart){
        //     let total=0
        //     cart.map((item)=>{
        //         total+=item.price
        //     })
            // const order=await orderModel.create({payment:total,foods:cart,buyer:req.body.userId})
            const order=await orderModel.create(req.body)
            order?res.status(201).json({message:"order placed successfully"}):res.status(400).json({message:"order not placed"})
        }catch (error) {
        res.status(500).json(error.message)
    }
}

const allOrders=async(req,res)=>{
    try {
        const orders=await orderModel.find()
        orders?res.status(200).json(orders):res.status(400).json({message:"orders not found"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const orderDetails=async(req,res)=>{
    try {
        const order=await orderModel.findById(req.params.id)
        order?res.status(200).json(order):res.status(400).json({message:"order not found"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

const updateOrder=async(req,res)=>{
    try {
        const order=await orderModel.findById(req.params.id)
        if(order){
            const updatedOrder=await orderModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
            updatedOrder?res.status(200).json(updatedOrder):res.status(400).json({message:"order not updated"})
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
}


const orderStatus=async(req,res)=>{
    try {
        const {orderStatus,isFastDelivery,isDiscount,isCancelled}=req.body
        if(orderStatus==="delivered"){
            const {deliveryDate,deliveryTime,deliveryAddress,deliveryCharge}=req.body
            if(!deliveryDate || !deliveryTime || !deliveryAddress || !deliveryCharge){
                return res.status(400).json({message:"should provide delivery date,time,address,charge"})
            }
        }
        if(isFastDelivery){
            const {fastDeliveryCharge,fastDeliveryDescription}=req.body
            if(!fastDeliveryCharge || !fastDeliveryDescription){
                return res.status(400).json({message:"should provide fast delivery charge,description"})
            }
        }
        if(isDiscount){
            const {discountType,discount,discountDescription}=req.body
            if(!discountType || !discount || !discountDescription){
                return res.status(400).json({message:"should provide discount type,discount,description"})
            }
        }
        if(isCancelled || orderStatus==="cancelled"){
            const {cancelReason,cancelBy,cancelDate,cancelTime}=req.body
            if(!cancelReason || !cancelBy || !cancelDate || !cancelTime){
                return res.status(400).json({message:"should provide cancel reason,cancel by,date,time"})
            }
        }
        const updateOrder=await orderModel.findByIdAndUpdate(req.params.id,{orderStatus},{new:true})
        updateOrder?res.status(200).json(updateOrder):res.status(400).json({message:"orders not found"})
    } catch (error) {
        res.status(500).json(error.message)
    }
}




module.exports={placeOrders,allOrders,orderDetails,updateOrder,orderStatus}