import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import Navbar from "./shared/Navbar";
import {
  ADMIN_API_END_POINT,
  RECRUITER_API_END_POINT,
  STUDENT_API_END_POINT,
} from "@/utils/constant";

const Admin = () => {
  const [students, setStudents] = useState([
    {
      _id: "1",
      fullname: "John Doe",
      email: "john@example.com",
      phonenumber: "1234567890",
      profile: { skills: ["JavaScript", "React"] },
      createdAt: "2023-05-01",
    },
    {
      _id: "2",
      fullname: "Jane Smith",
      email: "jane@example.com",
      phonenumber: "0987654321",
      profile: { skills: ["Node.js", "MongoDB"] },
      createdAt: "2023-06-01",
    },
  ]);
  const [recruiters, setRecruiters] = useState([
    {
      _id: "1",
      companyname: "Tech Corp",
      email: "techcorp@example.com",
      cinnumber: "123456",
      companyaddress: "123 Tech Street",
      companystatus: "Approved",
    },
    {
      _id: "2",
      companyname: "Dev Solutions",
      email: "devsolutions@example.com",
      cinnumber: "654321",
      companyaddress: "456 Dev Avenue",
      companystatus: "Pending",
    },
  ]);
  const [recruiterRequests, setRecruiterRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    if (user?.role !== "admin") {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(`${ADMIN_API_END_POINT}/recruiter-requests`, {
          credentials: "include",
        });
        const data = await res.json();
        if (data.success) setRecruiterRequests(data.requests);
      } catch (error) {
        console.error("Failed to fetch recruiter requests:", error);
      }
    };
    fetchRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      const response = await fetch(
        `${ADMIN_API_END_POINT}/recruiter-requests/${id}/approve`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to approve recruiter");

      setRecruiterRequests((prev) => prev.filter((r) => r._id !== id));

      const recruitersResponse = await fetch(
        `${RECRUITER_API_END_POINT}/recruiters`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      const recruitersData = await recruitersResponse.json();
      if (recruitersData.success && Array.isArray(recruitersData.recruiters)) {
        setRecruiters(recruitersData.recruiters);
      }

      toast.success(data.message || "Recruiter approved successfully");
    } catch (error) {
      console.error("Error approving recruiter:", error);
      toast.error(error.message || "Failed to approve recruiter");
    }
  };

  const handleReject = async (id) => {
    await fetch(`${ADMIN_API_END_POINT}/recruiter-requests/${id}/reject`, {
      method: "DELETE",
      credentials: "include",
    });
    setRecruiterRequests((prev) => prev.filter((r) => r._id !== id));
  };

  const handleDeleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student._id !== id));
  };

  const handleDeleteRecruiter = (id) => {
    setRecruiters((prev) => prev.filter((recruiter) => recruiter._id !== id));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-500">
          Admin Dashboard
        </h1>

        {/* Students Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">Students</h2>
          <div className="rounded-lg overflow-x-auto border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Skills
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black divide-y divide-gray-700">
                {students.map((student) => (
                  <tr key={student._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.fullname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {student.phonenumber || "N/A"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-wrap gap-2">
                        {(student.profile?.skills || []).map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700 text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(student.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDeleteStudent(student._id)}
                        className="bg-red-500 px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recruiters Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">Recruiters</h2>
          <div className="rounded-lg overflow-x-auto border border-gray-700">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    CIN
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-black divide-y divide-gray-700">
                {recruiters.map((rec) => (
                  <tr key={rec._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {rec.companyname}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{rec.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {rec.cinnumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {rec.companyaddress}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {rec.companystatus}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => handleDeleteRecruiter(rec._id)}
                        className="bg-red-500 px-4 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recruiter Requests Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Pending Recruiter Requests
          </h2>
          {recruiterRequests.map((req) => (
            <div key={req._id} className="bg-gray-800 p-4 rounded-lg mb-4">
              <p>
                <strong>Company:</strong> {req.companyname}
              </p>
              <p>
                <strong>Email:</strong> {req.email}
              </p>
              <p>
                <strong>CIN:</strong> {req.cinnumber}
              </p>
              <p>
                <strong>Address:</strong> {req.companyaddress}
              </p>
              <p>
                <strong>Status:</strong> {req.companystatus}
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleApprove(req._id)}
                  className="bg-green-500 px-4 py-1 rounded"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(req._id)}
                  className="bg-red-500 px-4 py-1 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;
