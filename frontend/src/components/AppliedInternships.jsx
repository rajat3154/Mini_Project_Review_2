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

const AppliedInternships = ({ internships = [] }) => {
  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case "accepted":
        return "bg-green-400";
      case "rejected":
        return "bg-red-400";
      case "pending":
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div>
      <Table className="min-w-full bg-black text-white rounded-lg shadow-lg overflow-hidden">
        <TableCaption className="text-blue-500">
          A list of your applied internships
        </TableCaption>
        <TableHeader className="bg-blue-600">
          <TableRow>
            <TableHead className="text-white py-3 px-4">Date</TableHead>
            <TableHead className="text-white py-3 px-4">
              Internship Role
            </TableHead>
            <TableHead className="text-white py-3 px-4">Company</TableHead>
            <TableHead className="text-white py-3 px-4 text-right">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {internships.map((internship, idx) => (
            <TableRow
              key={idx}
              className="hover:bg-blue-700 transition-all duration-200"
            >
              <TableCell className="py-3 px-4">
                {internship.appliedDate}
              </TableCell>
              <TableCell className="py-3 px-4">{internship.title}</TableCell>
              <TableCell className="py-3 px-4">{internship.company}</TableCell>
              <TableCell className="py-3 px-4 text-right">
                <Badge
                  className={`${getStatusBadge(
                    internship.status
                  )} text-white py-1 px-3 rounded-full`}
                >
                  {(internship.status || "PENDING").toUpperCase()}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedInternships;
