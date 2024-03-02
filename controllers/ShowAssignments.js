const Assignment=require("../Models/AssignmentModel");
const AssignAssignments=require("../Models/AssignAssignments");
const multer = require('multer');
const jwt = require('jsonwebtoken');

module.exports=async(req,res)=>{
    
    try{
        const token = req.header('Authorization');
        const decoded = jwt.verify(token, 'assignment');
        const sid = decoded.userId;
        
        const showAssignments= await AssignAssignments.find({active:0});
        if(showAssignments){
            res.status(200).json({"data":showAssignments,"status":200});
        }
        
       
    }catch(error){
        console.log(error);
        res.status(400).json({"message":error,"status":400});
    }
}