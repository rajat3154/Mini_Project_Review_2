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

const AppliedJobTable = ({ jobs = [] }) => {
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
          {jobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center py-4 text-gray-500">
                You haven't applied to any jobs yet.
              </TableCell>
            </TableRow>
          ) : (
            jobs.map((appliedJob, index) => (
              <TableRow
                key={appliedJob._id || index}
                className="hover:bg-blue-700 transition-all duration-200"
              >
                <TableCell className="py-3 px-4">
                  {appliedJob?.createdAt
                    ? appliedJob.createdAt.split("T")[0]
                    : appliedJob.appliedDate || "N/A"}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {appliedJob?.job?.title || appliedJob.title || "N/A"}
                </TableCell>
                <TableCell className="py-3 px-4">
                  {appliedJob?.job?.created_by?.companyname ||
                    appliedJob.company ||
                    "N/A"}
                </TableCell>
                <TableCell className="py-3 px-4 text-right">
                  <Badge
                    className={`${
                      appliedJob?.status === "rejected"
                        ? "bg-red-400 text-white"
                        : appliedJob?.status === "pending"
                        ? "bg-gray-400 text-white"
                        : appliedJob?.status === "accepted"
                        ? "bg-green-400 text-white"
                        : "bg-yellow-400 text-black"
                    } py-1 px-3 rounded-full`}
                  >
                    {appliedJob?.status
                      ? appliedJob.status.toUpperCase()
                      : "UNKNOWN"}
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
