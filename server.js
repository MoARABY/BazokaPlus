const express=require("express")
const cors=require("cors")
const morgan=require("morgan")
const helmet=require("helmet")
const cookieParser=require("cookie-parser")
require("dotenv").config()
const app=express()



// use middleware
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(helmet());
app.use(morgan("combined"))



// use moduls
const dbConnect=require("./config/dbConnection")
const authRouter=require("./routes/authRoute")
const userRouter=require("./routes/userRoute")
const categoryRouter=require("./routes/categoryRoute")
const restaurantRouter=require("./routes/restaurantRoute")
const foodRouter=require("./routes/foodRoute")
const orderRouter=require("./routes/orderRoute")
const uploadRouter=require("./routes/uploadRoute")
const rateLimiter = require('./utils/rateLimiter');




// start req
app.get("/",(req,res)=>{
    res.status(200).send("Bazooka")
})
app.use("/api/v1/auth",rateLimiter,authRouter)
app.use("/api/v1/user",userRouter)
app.use("/api/v1/category",categoryRouter)
app.use("/api/v1/restaurant",restaurantRouter)
app.use("/api/v1/food",foodRouter)
app.use("/api/v1/order",rateLimiter,orderRouter)
app.use("/api/v1/upload",uploadRouter)


// server listen
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`server start at port ${PORT}`)
    dbConnect()
})