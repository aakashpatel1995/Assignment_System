const User= require("../Models/UserModel");
const bcrypt=require('bcrypt');
module.exports= async(req,res)=>{
try{
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const {firstname,lastname,email,password,role,userstatus}=req.body;
 if (!firstname || !lastname || !email || !password || !role ) {
    return res.status(400).json({ message: 'All fields are required', status: 400 });
}
if(regex.test(email)==false){

    return res.status(400).json({ message: 'Please enter valid email', status: 400 });
}
if(password.length<=6 || password.length>=8 ){
    return res.status(400).json({ message: 'Password length must be between 6 to 8 characters', status: 400 });
}

 const passowrdHashed=await bcrypt.hash(password,10);
 const user=new User({firstname,lastname,email,password:passowrdHashed,role,userstatus});
 await user.save();
 res.status(200).json({"message":"User Signup successfully","status":200});

}catch(error){
    console.log(error);
    res.status(400).json({"message":error,"Status":400});
}
}