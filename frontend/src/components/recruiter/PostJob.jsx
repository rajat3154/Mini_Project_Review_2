import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { X, ChevronRight, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { Textarea } from "../ui/textarea";

const PostJob = ({ onClose }) => {
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
                Post New Job
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Interactive but non-functional Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Title*", placeholder: "Software Engineer" },
                { label: "Salary*", placeholder: "$80,000 - $100,000" },
                { label: "Location*", placeholder: "New York, NY or Remote" },
                { label: "Job Type*", placeholder: "Full-time, Part-time" },
                { label: "Experience*", placeholder: "3+ years" },
                { label: "Positions*", placeholder: "Number of openings" },
              ].map((field, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (i + 1) }}
                  className="space-y-2"
                >
                  <Label className="text-gray-300">{field.label}</Label>
                  <Input
                    type="text"
                    placeholder={field.placeholder}
                    className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                    onChange={() => {}}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="col-span-full space-y-2"
              >
                <Label className="text-gray-300">Description*</Label>
                <Textarea
                  placeholder="Detailed job description..."
                  rows={4}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  onChange={() => {}}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="col-span-full space-y-2"
              >
                <Label className="text-gray-300">Requirements*</Label>
                <Textarea
                  placeholder="Required skills and qualifications..."
                  rows={4}
                  className="bg-gray-800/50 border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  onChange={() => {}}
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
                Post Job <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default PostJob;
