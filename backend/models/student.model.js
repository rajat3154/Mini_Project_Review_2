import mongoose from "mongoose"
const studentSchema=new mongoose.Schema({
      fullname:{
            type:String,
            required:true
      },
      email:{
            type:String,
            required:true,
            unique:true
      },
      phonenumber:{
            type:Number,
            required:true
      },
      password:{
            type:String,
            required:true
      },
      role:{
            type:String,
            default:"student",
      },
      status:{
            type:String,
            enum:['fresher','experienced'],
            required:true
      },
      profile: {
            bio: { type: String },
            skills: [{ type: String }],
            resume: { type: String },
            resumeOriginalName: { type: String },
            company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
            profilePhoto: {
                  type: String,
                  default: ""
            }
      },
},{timestamps:true})

export const Student = mongoose.model('Student', studentSchema);