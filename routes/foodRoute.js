const router= require('express').Router();
const {createFood,getFoods,getFoodByRestaurant,getFoodByCategory,getFood,updateFood,deleteFood}=require("../controllers/foodController")
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorized}=require("../utils/verifyToken")


router.post("/" ,verifyTokenAndAdmin,createFood)
router.get("/"  ,verifyToken,getFoods)
router.get("/restaurant/:restaurantId"  ,getFoodByRestaurant)
router.get("/category/:categoryId"  ,getFoodByCategory)
router.get("/:id",verifyToken   ,getFood)
router.put("/:id",verifyTokenAndAdmin   ,updateFood)
router.delete("/:id",verifyTokenAndAdmin    ,deleteFood)


module.exports=router