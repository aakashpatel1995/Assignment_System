const Assignment=require("../Models/AssignmentModel");
const AssignAssignments=require("../Models/AssignAssignments");
const multer = require('multer');
const jwt = require('jsonwebtoken');

module.exports=async(req,res)=>{
    
    try{
        const token = req.header('Authorization');
        const decoded = jwt.verify(token, 'assignment');
        const sid = decoded.userId;
        const { assignmentName,deadlineDate,price, files} = req.body;
     
        const postAssignment= new Assignment({assignmentName,deadlineDate,price,files:req.file.filename,minPrice:10,active:0})
        if(postAssignment){
            postAssignment.save();
            const assign=new AssignAssignments({sid:sid,solveid:"-",assignmentName,deadlineDate,price,minPrice:10,files:req.file.filename,active:0})
            assign.save();
        }
        
        res.status(200).json({"message":"Assignment added successfully","status":200});
       
    }catch(error){
        console.log(error);
        res.status(400).json({"message":error,"status":400});
    }
}