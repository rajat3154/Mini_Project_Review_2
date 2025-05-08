import mongoose, { Mongoose } from "mongoose";
const applicationSchema = new mongoose.Schema({
      job: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Job",
            required: true
      },
      applicant: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Student', // ✅ FIXED: Match the populate model
            required: true
      }
,
      status: {
            type: String,
            enum: ['pending', 'accepted', 'rejected'],
            default: 'pending'
      }
}, { timestamps: true });
export const Application = mongoose.model("Application", applicationSchema);