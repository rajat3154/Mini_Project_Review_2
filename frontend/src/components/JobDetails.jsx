import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { MoreHorizontal } from "lucide-react";
import Navbar from "./shared/Navbar";

const shortlistingStatus = ["Accepted", "Rejected"];

const JobDetails = () => {
  // Sample static job data
  const job = {
    title: "Frontend Developer",
    position: 2,
    jobType: "Full-time",
    salary: 60000,
    location: "Bangalore",
    description: "Develop and maintain web applications using React.",
    experience: 2,
    requirements: [
      "Proficiency in React.js",
      "Understanding of REST APIs",
      "Experience with Git",
    ],
    createdAt: new Date().toISOString(),
    applications: [
      {
        _id: "app123",
        status: "Pending",
        createdAt: new Date().toISOString(),
        applicant: {
          fullname: "Rajat Kumar",
          email: "rajat@example.com",
          resume: "https://example.com/resume.pdf",
        },
      },
      {
        _id: "app124",
        status: "Accepted",
        createdAt: new Date().toISOString(),
        applicant: {
          fullname: "Aisha Roy",
          email: "aisha@example.com",
          resume: "",
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-black text-white min-h-screen py-20 overflow-x-hidden">
        <div className="container px-4 ml-8 mr-10">
          <div className="flex items-center justify-between mb-6 mr-7">
            <h1 className="text-3xl font-bold">{job.title}</h1>
          </div>

          <div className="flex gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-md">
              {job.position} Position{job.position > 1 ? "s" : ""}
            </span>
            <span className="px-3 py-1 bg-red-100 text-[#F83002] text-sm font-bold rounded-md">
              {job.jobType}
            </span>
            <span className="px-3 py-1 bg-purple-100 text-[#7209b7] text-sm font-bold rounded-md">
              ₹{job.salary}
            </span>
          </div>

          <h2 className="border-b-2 border-gray-300 text-xl font-medium py-4 mb-6">
            Job Description
          </h2>
          <div className="space-y-4 mb-12">
            <h1 className="font-bold text-lg">
              Role:{" "}
              <span className="font-normal text-gray-300">{job.title}</span>
            </h1>
            <h1 className="font-bold text-lg">
              Location:{" "}
              <span className="font-normal text-gray-300">{job.location}</span>
            </h1>
            <h1 className="font-bold text-lg">
              Description:{" "}
              <span className="font-normal text-gray-300">
                {job.description}
              </span>
            </h1>
            <h1 className="font-bold text-lg">
              Experience:{" "}
              <span className="font-normal text-gray-300">
                {job.experience} years
              </span>
            </h1>
            <h1 className="font-bold text-lg">
              Salary:{" "}
              <span className="font-normal text-gray-300">₹{job.salary}</span>
            </h1>
            <div>
              <h1 className="font-bold text-lg">Requirements:</h1>
              <ul className="list-disc list-inside text-gray-300 ml-2">
                {job.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>
            <h1 className="font-bold text-lg">
              Total Applicants:{" "}
              <span className="font-normal text-gray-300">
                {job.applications.length}
              </span>
            </h1>
            <h1 className="font-bold text-lg">
              Posted Date:{" "}
              <span className="font-normal text-gray-300">
                {new Date(job.createdAt).toLocaleDateString()}
              </span>
            </h1>
          </div>

          {/* Applicants Table */}
          <div className="mt-12">
            <h2 className="border-b-2 border-gray-300 text-xl font-medium py-4 mb-6">
              Applicants
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-gray-600">
                    <th className="pb-3">Name</th>
                    <th className="pb-3">Email</th>
                    <th className="pb-3">Status</th>
                    <th className="pb-3">Resume</th>
                    <th className="pb-3">Applied Date</th>
                    <th className="pb-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {job.applications.map((app) => (
                    <tr key={app._id} className="border-b border-gray-600">
                      <td className="py-4">{app.applicant.fullname}</td>
                      <td>{app.applicant.email}</td>
                      <td>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-sm">
                          {app.status}
                        </span>
                      </td>
                      <td>
                        {app.applicant.resume ? (
                          <a
                            href={app.applicant.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                          >
                            View PDF
                          </a>
                        ) : (
                          "No Resume"
                        )}
                      </td>
                      <td>{new Date(app.createdAt).toLocaleDateString()}</td>
                      <td className="relative">
                        <Popover>
                          <PopoverTrigger>
                            <MoreHorizontal className="cursor-pointer text-gray-400 hover:text-white" />
                          </PopoverTrigger>
                          <PopoverContent className="bg-black text-white rounded-lg shadow-lg p-2">
                            {shortlistingStatus.map((status, index) => (
                              <div
                                key={index}
                                className="px-2 py-1 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                              >
                                {status}
                              </div>
                            ))}
                          </PopoverContent>
                        </Popover>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
