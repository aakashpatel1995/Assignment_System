const mongoose =require("mongoose") ;

const userSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: true,
      },
      solveid:{
        type: String,
        required: true,
        default:"-"
      },
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
  uploadedFiles:{
    type:String,
    required:true,
    default:"-"
  },
  active:{
    type:Number,
    required:true,
    default:0,
  }
});

module.exports = mongoose.model("AssignAssignments", userSchema)
