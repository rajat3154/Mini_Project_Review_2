import React from "react";
import { Button } from "./ui/button";

const InternshipDescription = () => {
  // Static sample internship data
  const internship = {
    title: "Frontend Intern",
    skills: ["JavaScript", "React", "CSS"],
    type: "Full-Time",
    stipend: "₹20,000/month",
    location: "Bangalore, India",
    duration: "3 months",
    description:
      "Work with our frontend team to build scalable, responsive web applications. This is a great opportunity for hands-on learning and professional development.",
    applications: [{ applicant: "user1" }, { applicant: "user2" }],
    createdAt: new Date().toISOString(),
  };

  return (
    <div className="bg-black text-white min-h-screen py-20 overflow-x-hidden overflow-y-hidden">
      <div className="container px-4 ml-8 mr-10">
        {/* Internship Title and Apply Button */}
        <div className="flex items-center justify-between mb-6 mr-7">
          <h1 className="text-3xl font-bold">{internship.title}</h1>
          <Button className="rounded-lg text-sm font-bold px-6 py-3 bg-green-600 cursor-pointer">
            Apply Now
          </Button>
        </div>

        {/* Internship Info Badges */}
        <div className="flex gap-4 mb-6">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-md">
            {internship.skills.length} Skills
          </span>
          <span className="px-3 py-1 bg-red-100 text-[#F83002] text-sm font-bold rounded-md">
            {internship.type}
          </span>
          <span className="px-3 py-1 bg-purple-100 text-[#7209b7] text-sm font-bold rounded-md">
            ₹{internship.stipend}
          </span>
        </div>

        {/* Internship Description */}
        <h2 className="border-b-2 border-gray-300 text-xl font-medium py-4 mb-6">
          Internship Description
        </h2>
        <div className="space-y-4">
          <h1 className="font-bold text-lg">
            Role:{" "}
            <span className="font-normal text-gray-300">
              {internship.title}
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Location:{" "}
            <span className="font-normal text-gray-300">
              {internship.location}
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Type:{" "}
            <span className="font-normal text-gray-300">{internship.type}</span>
          </h1>
          <h1 className="font-bold text-lg">
            Duration:{" "}
            <span className="font-normal text-gray-300">
              {internship.duration}
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Stipend:{" "}
            <span className="font-normal text-gray-300">
              {internship.stipend}
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Description:{" "}
            <span className="font-normal text-gray-300">
              {internship.description}
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Required Skills:{" "}
            <span className="font-normal text-gray-300">
              {internship.skills.join(", ")}
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Total Applicants:{" "}
            <span className="font-normal text-gray-300">
              {internship.applications.length}
            </span>
          </h1>
          <h1 className="font-bold text-lg">
            Posted Date:{" "}
            <span className="font-normal text-gray-300">
              {new Date(internship.createdAt).toLocaleDateString()}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InternshipDescription;
