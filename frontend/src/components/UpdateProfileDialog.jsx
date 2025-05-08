import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const UpdateProfileDialog = ({ open, setOpen }) => {
  // Static data for the profile
  const user = {
    fullname: "John Doe",
    email: "john.doe@example.com",
    phonenumber: "+1234567890",
    profile: {
      profilePhoto: "/path/to/profilePic.jpg", // Static image path
      bio: "Software engineer passionate about building web applications.",
      skills: ["JavaScript", "React", "Node.js", "CSS"],
      resume: "https://example.com/resume.pdf",
      resumeOriginalName: "JohnDoe_Resume.pdf",
    },
  };

  // If dialog is not open, return null
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl border border-gray-800 shadow-xl p-6"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Update Profile
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            &times;
          </button>
        </div>

        <form className="space-y-4">
          {/* Displaying static data fields */}
          {["fullname", "email", "phonenumber", "bio", "skills"].map(
            (field, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <label className="text-sm font-medium text-gray-300">
                  {field.charAt(0).toUpperCase() + field.slice(1)}*
                </label>
                <input
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={user[field] || user.profile[field] || ""}
                  disabled
                  className="w-full px-3 py-2 text-sm text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </motion.div>
            )
          )}

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
          
            
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="pt-2"
          >
            <button
              type="button"
              onClick={() => setOpen(false)} // Close dialog without any submission action
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              Update Profile <ChevronRight className="h-4 w-4" />
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default UpdateProfileDialog;
