import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";

const AppliedJobTable = () => {
  // Static sample data
  const appliedJobs = [
    {
      _id: "1",
      createdAt: "2025-05-01T12:00:00Z",
      job: {
        title: "Frontend Developer",
        created_by: { companyname: "Samsung" },
      },
      status: "accepted",
    },
    {
      _id: "2",
      createdAt: "2025-04-15T10:30:00Z",
      job: {
        title: "Backend Developer",
        created_by: { companyname: "Google" },
      },
      status: "pending",
    },
    {
      _id: "3",
      createdAt: "2025-03-28T08:00:00Z",
      job: {
        title: "Data Scientist",
        created_by: { companyname: "Meta" },
      },
      status: "rejected",
    },
  ];

  return (
    <div>
      <Table className="min-w-full bg-black text-white rounded-lg shadow-lg overflow-hidden">
        <TableCaption className="text-blue-500">
          A list of your applied jobs
        </TableCaption>
        <TableHeader className="bg-blue-600">
          <TableRow>
            <TableHead className="text-white py-3 px-4">Date</TableHead>
            <TableHead className="text-white py-3 px-4">Job Role</TableHead>
            <TableHead className="text-white py-3 px-4">Company</TableHead>
            <TableHead className="text-white py-3 px-4 text-right">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                You haven't applied to any jobs yet.
              </TableCell>
            </TableRow>
          ) : (
            appliedJobs.map((appliedJob) => (
              <TableRow
                key={appliedJob._id}
                className="hover:bg-blue-700 transition-all duration-200"
              >
                <TableCell className="py-3 px-4">
                  {appliedJob?.createdAt?.split("T")[0]}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {appliedJob.job?.title}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {appliedJob.job?.created_by?.companyname}
                </TableCell>
                <TableCell className="py-3 px-4 text-right">
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-400 text-white"
                        : appliedJob.status === "pending"
                        ? "bg-gray-400 text-white"
                        : "bg-green-400 text-white"
                    } py-1 px-3 rounded-full`}
                  >
                    {appliedJob.status.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
