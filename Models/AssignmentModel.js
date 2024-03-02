const mongoose =require("mongoose") ;

const userSchema = new mongoose.Schema({
  assignmentName: {
    type: String,
    required: true,
  },
  deadlineDate: {
    type: Date,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  minPrice:{
    type:Number,
    required:true,
    default:10
  },
  files:{
    type:String,
    required:true,
  },
  active:{
    type:Number,
    required:true,
  }
});

module.exports = mongoose.model("Assignments", userSchema)
