import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X, ChevronRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Textarea } from "../ui/textarea";

const PostInternship = ({ onClose }) => {
  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    stipend: "",
    location: "",
    type: "Remote",
    skills: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Posted Internship:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl shadow-xl border border-gray-800 overflow-hidden"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Post New Internship
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <Label className="text-gray-300">Title*</Label>
                <Input
                  name="title"
                  placeholder="Frontend Developer Intern"
                  value={formData.title}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <Label className="text-gray-300">Duration*</Label>
                <Input
                  name="duration"
                  placeholder="3 months"
                  value={formData.duration}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <Label className="text-gray-300">Stipend*</Label>
                <Input
                  name="stipend"
                  placeholder="$1000/month"
                  value={formData.stipend}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <Label className="text-gray-300">Location*</Label>
                <Input
                  name="location"
                  placeholder="Remote or Office location"
                  value={formData.location}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <Label className="text-gray-300">Type*</Label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="Remote">Remote</option>
                  <option value="In-office">In-office</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2"
              >
                <Label className="text-gray-300">Skills*</Label>
                <Input
                  name="skills"
                  placeholder="React, JavaScript, CSS"
                  value={formData.skills}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="col-span-full space-y-2"
              >
                <Label className="text-gray-300">Description*</Label>
                <Textarea
                  name="description"
                  placeholder="Detailed description of the internship..."
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </motion.div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 pt-2">
              <Button
                type="button"
                onClick={onClose}
                variant="outline"
                className="border-gray-700 hover:bg-gray-800/50 px-6"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-6"
              >
                Post Internship <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default PostInternship;
