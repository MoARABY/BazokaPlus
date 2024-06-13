const JWT=require("jsonwebtoken")
require("dotenv").config()


const verifyToken=(req,res,next)=>{
    const token=req.cookies.Token
    // console.log(token)
    if(!token){return res.status(401).json("you are not authorized 1")}
    JWT.verify(token,process.env.SECRET_KEY,(err,user)=>{
        if(err){
            console.log(err)
            return res.status(401).json("invaild token")}
        req.user=user
        next()
    })
}

const verifyTokenAndAdmin=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.type=="admin"){
            next()
        } else {
            return res.status(401).json("you are not authorized 2")
        }
    })
}

const verifyTokenAndAuthorized=(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id === req.params.id || req.user.userType=="admin"){
            next()
        } else {
            return res.status(401).json("you are not authorized")
        }
    })
}


module.exports={verifyToken,verifyTokenAndAdmin,verifyTokenAndAuthorized}