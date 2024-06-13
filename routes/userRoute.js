const router=require("express").Router()
const {verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorized}=require("../utils/verifyToken")
const {getUsers,getUser,updateUser,deleteProfile,updatePassword,resetPassword}=require("../controllers/userController")


router.get("/" ,verifyTokenAndAdmin, getUsers)
router.get("/:id" ,verifyToken, getUser)
router.put("/:id" ,verifyTokenAndAuthorized, updateUser)
router.delete("/:id" ,verifyTokenAndAuthorized, deleteProfile)
router.post("/updatePassword/:id" ,verifyTokenAndAuthorized, updatePassword)
router.post("/resetPassword/:id" ,verifyTokenAndAuthorized, resetPassword)

module.exports=router