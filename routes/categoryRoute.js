const router=require("express").Router()

const {createCategory,getCategries,getCategory,updateCategory,deleteCategory}=require("../controllers/categoryController")
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorized}=require("../utils/verifyToken")


router.post("/",verifyTokenAndAdmin,createCategory)
router.get("/",getCategries)
router.get("/:id",getCategory)
router.put("/:id",verifyTokenAndAdmin,updateCategory)
router.delete("/:id",verifyTokenAndAdmin,deleteCategory)


module.exports=router
