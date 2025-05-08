import { Application } from "../models/application.model.js";



export const applyJob = async (req, res) => {
      try {
            const userId = req.user.id;
            const jobId = req.params.id;
            if (!jobId) {
                  return res.status(400).json({
                        message: "Job id is required",
                        success: false,
                  });
            }
            const existingApplication = await Application.findOne({
                  job: jobId,
                  applicant: userId,
            });
            if (existingApplication) {
                  return res.status(400).json({
                        message: "You have already applied for this job",
                        success: false,
                  });
            }
            const job = await Job.findById(jobId);
            if (!job) {
                  return res.status(404).json({
                        message: "Job not found",
                        success: false,
                  });
            }
            const newApplication = await Application.create({
                  job: jobId,
                  applicant: userId,
            });
            job.applications.push(newApplication._id);
            await job.save();
            return res.status(201).json({
                  message: "Application submitted successfully",
                  success: true,
            });
      } catch (error) {
            console.log(error);
      }
};
export const getAppliedJobs = async (req, res, next) => {
      try {
            const userId = req.user.id;

            const applications = await Application.find({ applicant: userId })
                  .sort({ createdAt: -1 })
                  .populate({
                        path: "job",
                        populate: {
                              path: "created_by",
                              select: "companyname", // Fetch company name
                        },
                  });

            res.status(200).json({
                  success: true,
                  appliedJobs: applications, // ✅ Fix here
            });
      } catch (error) {
            console.log("Error in getAppliedJobs", error);
            next?.(error);
      }
};


import { Job } from "../models/job.model.js";
import { Student } from "../models/student.model.js"; 

export const getApplicants = async (req, res) => {
      const job = await Job.findById(req.params.id)
            .populate({
                  path: "applications",
                  populate: {
                        path: "applicant",
                        model: "Student",
                  },
            });

      return res.status(200).json({
            job,
            applicants: job.applications.map(app => app.applicant),
            success: true,
      });
};
export const updateStatus = async (req, res) => {
      try {
            const { status } = req.body;
            const applicationId = req.params.id;
            if (!status) {
                  return res
                        .status(400)
                        .json({ message: "Status is required", success: false });
            }
            const application = await Application.findById(applicationId);
            if (!application) {
                  return res
                        .status(404)
                        .json({ message: "Application not found", success: false });
            }
            application.status = status.toLowerCase();
            await application.save();
            return res
                  .status(200)
                  .json({ message: "Status *updated successfully", success: true });
      } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Server error", success: false });
      }
};
