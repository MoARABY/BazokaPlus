const router= require('express').Router();

const {placeOrders,allOrders,orderDetails,updateOrder,orderStatus}=require("../controllers/orderController")
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorized}=require("../utils/verifyToken")


router.post("/" ,verifyToken,placeOrders)
router.get("/"  ,verifyTokenAndAdmin,allOrders)
router.get("/:id",verifyToken   ,orderDetails)
router.put("/:id",verifyTokenAndAdmin   ,updateOrder)
router.put("/:id/status",verifyTokenAndAdmin   ,orderStatus)


module.exports=router