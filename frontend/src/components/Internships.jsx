import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./shared/Navbar";
import LatestInternshipCards from "./LatestInternshipCards";
import { Button } from "../components/ui/button";
import { Plus } from "lucide-react";
import PostInternship from "./recruiter/PostInternship";

const staticInternships = [
  {
    _id: "1",
    companyname: "Google",
    location: "Bangalore",
    title: "Frontend Developer Intern",
    description: "Work on scalable UIs with React and TypeScript.",
    duration: "3 months",
    stipend: "₹20,000/month",
    type: "Remote",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    createdAt: new Date(),
  },
  {
    _id: "2",
    companyname: "Microsoft",
    location: "Hyderabad",
    title: "Backend Developer Intern",
    description: "Develop REST APIs and work on cloud services.",
    duration: "6 months",
    stipend: "₹25,000/month",
    type: "In-office",
    skills: ["Node.js", "Express", "MongoDB"],
    createdAt: new Date(),
  },
  {
    _id: "3",
    companyname: "Amazon",
    location: "Chennai",
    title: "SDE Intern",
    description: "Build scalable services and optimize performance.",
    duration: "3 months",
    stipend: "₹30,000/month",
    type: "Remote",
    skills: ["Java", "Data Structures", "System Design"],
    createdAt: new Date(),
  },
  {
    _id: "4",
    companyname: "Swiggy",
    location: "Bangalore",
    title: "UI/UX Design Intern",
    description: "Create user-centered designs for mobile apps.",
    duration: "2 months",
    stipend: "₹15,000/month",
    type: "In-office",
    skills: ["Figma", "Adobe XD", "User Research"],
    createdAt: new Date(),
  },
  {
    _id: "5",
    companyname: "Zomato",
    location: "Delhi",
    title: "Marketing Intern",
    description: "Assist in social media and digital marketing strategies.",
    duration: "1 month",
    stipend: "₹10,000/month",
    type: "Remote",
    skills: ["SEO", "Content Writing", "Analytics"],
    createdAt: new Date(),
  },
];

const Internships = () => {
  const [showPostModal, setShowPostModal] = useState(false);

  // Access the logged-in user from Redux state
  const { user } = useSelector((store) => store.auth);
  const isRecruiter = user?.role === "recruiter";

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="container mx-auto text-center py-10">
        <h1 className="text-3xl font-bold mb-3 text-blue-500">
          Explore <span className="text-white text-4xl">Internships</span>
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          Gain hands-on experience and kickstart your career!
        </p>

        {/* Show Post Internship button only if recruiter is logged in */}
        {isRecruiter && (
          <Button
            onClick={() => setShowPostModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="h-5 w-5 mr-1" />
            Post Internship
          </Button>
        )}
      </div>

      <div className="container mx-auto px-4 pb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold text-blue-400">
            All Internships
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {staticInternships.map((internship) => (
            <LatestInternshipCards
              key={internship._id}
              internship={internship}
            />
          ))}
        </div>
      </div>

      {/* Show modal when triggered */}
      {showPostModal && (
        <PostInternship onClose={() => setShowPostModal(false)} />
      )}
    </div>
  );
};

export default Internships;
