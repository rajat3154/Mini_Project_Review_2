import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import AppliedJobTable from "./AppliedJobTable";
import AppliedInternships from "./AppliedInternships"; // Static AppliedInternships component
import UpdateProfileDialog from "./UpdateProfileDialog";
import profilePic from "./assets/a.jpg";
const Profile = () => {
  const [open, setOpen] = useState(false);

  // Static user data
  const user = {
    fullname: "John Doe",
    email: "john.doe@example.com",
    phonenumber: "+1234567890",
    profile: {
      profilePhoto: profilePic,
      bio: "Software engineer passionate about building web applications.",
      skills: ["JavaScript", "React", "Node.js", "CSS"],
      resume: "https://example.com/resume.pdf",
      resumeOriginalName: "JohnDoe_Resume.pdf",
    },
  };

  // Mock Data for Static Applied Jobs and Internships
  const appliedJobs = [
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      appliedDate: "2025-05-01",
    },
    {
      title: "Backend Developer",
      company: "InnovateX",
      appliedDate: "2025-04-20",
    },
  ];

  const appliedInternships = [
    {
      title: "Data Science Intern",
      company: "DataWorks",
      appliedDate: "2025-04-15",
    },
    { title: "UX/UI Intern", company: "DesignPro", appliedDate: "2025-04-10" },
  ];

  return (
    <div className="min-h-screen bg-black p-4">
      <Navbar />

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto bg-black bg-opacity-90 text-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage
                src={user?.profile?.profilePhoto}
                alt="profile"
                className="h-24 w-24 rounded-full border-4 border-blue-600"
              />
            </Avatar>
            <div>
              <h1 className="font-semibold text-2xl text-blue-400">
                {user?.fullname}
              </h1>
              <p className="text-white">{user?.profile?.bio}</p>
            </div>
          </div>

          {/* Edit Button */}
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            size="sm"
            className="text-white bg-black border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            <Pen className="text-white" />
          </Button>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="text-blue-400" />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="text-green-400" />
            <span>{user?.phonenumber || user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-6">
          <h2 className="text-lg font-semibold text-blue-300 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills?.length > 0 ? (
              user.profile.skills.map((skill, idx) => (
                <Badge key={idx} className="bg-blue-500 text-white">
                  {skill}
                </Badge>
              ))
            ) : (
              <span className="text-gray-500">NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="my-6">
          <h2 className="text-lg font-semibold text-blue-300 mb-3">Resume</h2>
          {user?.profile?.resume ? (
            <a
              href={user.profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {user.profile.resumeOriginalName || "View Resume"}
            </a>
          ) : (
            <span className="text-gray-500">NA</span>
          )}
        </div>
      </div>

      {/* Applied Jobs and Internships Section */}
      <div className="flex justify-between gap-8 max-w-7xl mx-auto bg-black bg-opacity-90 rounded-lg shadow-lg p-4 my-6">
        {/* Applied Jobs Table */}
        <div className="w-full">
          <h1 className="font-bold text-2xl text-blue-400 mb-6">
            All Applied Jobs
          </h1>
          {appliedJobs.length > 0 ? (
            <AppliedJobTable jobs={appliedJobs} />
          ) : (
            <p className="text-gray-400">
              You haven’t applied to any jobs yet.
            </p>
          )}
        </div>

        {/* Applied Internships Section */}
        <div className="w-full">
          <h1 className="font-bold text-2xl text-blue-400 mb-6">
            All Applied Internships
          </h1>
          {appliedInternships.length > 0 ? (
            <AppliedInternships internships={appliedInternships} />
          ) : (
            <p className="text-gray-400">
              You haven’t applied to any internships yet.
            </p>
          )}
        </div>
      </div>

      {/* Update Dialog */}
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
