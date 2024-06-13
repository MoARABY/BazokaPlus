const router= require('express').Router();
const {createRestaurent,getRestaurents,getRestaurent,updateRestaurent,deleteRestaurent}=require("../controllers/restaurantController")
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorized}=require("../utils/verifyToken")


router.post("/",verifyTokenAndAdmin,createRestaurent)
router.get("/",getRestaurents)
router.get("/:id",getRestaurent)
router.put("/:id",verifyTokenAndAdmin,updateRestaurent)
router.delete("/:id",verifyTokenAndAdmin,deleteRestaurent)


module.exports=router