const mongoose=require("mongoose")


const dbConnection =async()=>{
    const dbConnection =await mongoose.connect(process.env.CONNECTION_STRING)
    if(dbConnection){
        console.log("connected successfully to database")
    } else {
        console.log("connection failed")
    }
    
}


module.exports=dbConnection