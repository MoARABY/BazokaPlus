const router= require('express').Router();
const upload=require('../utils/multerUpload');


router.post('/',upload.single('image'),(req,res)=>{
    try {
        console.log(req.file)
        if(!req.file){
            return res.status(400).json({message:"file not found"})
        }
        res.status(200).json({message:"file uploaded successfully"})
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router;