const User=require("../Models/UserModel");
const bcrypt=require("bcrypt");
const jwt = require('jsonwebtoken');


module.exports=async(req,res)=>{
    try{
       
        const user=await User.findOne({email:req.body.email});
        if(user){
            const matchPassword=await bcrypt.compare(req.body.password,user.password);
            if(matchPassword){
                const token = jwt.sign({ userId: user._id }, 'assignment', {
                    expiresIn: '1h',
                    });
                    
                res.json({ "message":"Login successfully","status":200,"Data":user ,"token":token});
              
                   
            }else{
                res.json({"message":"password wrong","status":401});
            }
        }else{
            res.json({"message":"User not exist","status":400});
        }
    }catch(error){
        console.log(error);
        res.json({"message":error,"status":500});
    }
}