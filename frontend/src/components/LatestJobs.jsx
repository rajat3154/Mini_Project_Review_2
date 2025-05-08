import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LatestJobCards from "./LatestJobCards";
import profilePic from "./assets/a.jpg";
const staticJobs = [
  {
    _id: "1",
    createdAt: new Date().toISOString(),
    title: "Frontend Developer",
    description: "Work on React.js and Tailwind CSS projects.",
    location: "Bangalore",
    jobType: "Full-Time",
    salary: 10,
    position: 2,
    company: {
      name: "TechNova",
      logo: profilePic,
    },
  },
  {
    _id: "2",
    createdAt: new Date().toISOString(),
    title: "Backend Engineer",
    description: "Build scalable APIs using Node.js and Express.",
    location: "Remote",
    jobType: "Part-Time",
    salary: 8,
    position: 1,
    company: {
      name: "CodeWave",
      logo: profilePic,
    },
  },
  {
    _id: "3",
    createdAt: new Date().toISOString(),
    title: "Data Analyst",
    description: "Analyze and visualize data using Python and Power BI.",
    location: "Delhi",
    jobType: "Full-Time",
    salary: 9,
    position: 1,
    company: {
      name: "InsightEdge",
      logo: profilePic,
    },
  },
  {
    _id: "4",
    createdAt: new Date().toISOString(),
    title: "DevOps Intern",
    description: "Assist with CI/CD pipelines and cloud infrastructure.",
    location: "Hyderabad",
    jobType: "Internship",
    salary: 5,
    position: 1,
    company: {
      name: "CloudSphere",
      logo: profilePic,
    },
  },
  {
    _id: "5",
    createdAt: new Date().toISOString(),
    title: "UI/UX Designer",
    description: "Design intuitive user experiences for web and mobile.",
    location: "Pune",
    jobType: "Full-Time",
    salary: 7,
    position: 1,
    company: {
      name: "Designify",
      logo: profilePic,
    },
  },
];

const LatestJobs = ({ query }) => {
  const [latestJobs, setLatestJobs] = useState([]);

  useEffect(() => {
    setLatestJobs(staticJobs);
  }, []);

  const filteredJobs = latestJobs.filter((job) => {
    const q = query?.toLowerCase().trim();
    if (!q) return true;

    const combined = [
      job.title,
      job.description,
      job.company?.name,
      job.location,
      job.jobType,
      job.salary,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return combined.includes(q);
  });

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mb-10">
          <span className="text-blue-500 text-3xl">Latest and Top </span>Job
          Openings
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length === 0 ? (
            <span className="col-span-full text-gray-400 text-lg">
              No Job Available
            </span>
          ) : (
            filteredJobs.map((job) => (
              <LatestJobCards key={job._id} job={job} />
            ))
          )}

          <Link
            to="/jobs"
            className="p-6 rounded-lg shadow-lg bg-black text-white border border-blue-500 hover:bg-gray-800 cursor-pointer transition duration-300 flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl font-bold text-blue-400">View More Jobs</h2>
            <p className="mt-2 text-gray-300 text-lg">
              Explore all job openings
            </p>
            <div className="mt-6 flex justify-center">
              <button className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-500 text-blue-400 text-2xl cursor-pointer hover:text-white transition duration-300">
                ➡️
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestJobs;
