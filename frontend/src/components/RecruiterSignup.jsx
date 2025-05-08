import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";
import { RECRUITER_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const RecruiterSignup = () => {
  const [input, setInput] = useState({
    companyname: "",
    email: "",
    cinnumber: "",
    companyaddress: "",
    companystatus: "",
    password: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${RECRUITER_API_END_POINT}/signup`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <>

      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl shadow-xl border border-gray-800 p-8"
        >
          <div className="flex items-center justify-center mb-6">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Recruiter Sign Up
            </h1>
          </div>

          <form onSubmit={submitHandler} className="space-y-5">
            {[
              { label: "Company Name", name: "companyname", type: "text" },
              { label: "Email", name: "email", type: "email" },
              {
                label: "Company Identification Number (CIN)",
                name: "cinnumber",
                type: "number",
              },
              {
                label: "Company Address",
                name: "companyaddress",
                type: "text",
              },
              {
                label: "Company Status",
                name: "companystatus",
                type: "text",
              },
              { label: "Password", name: "password", type: "password" },
            ].map((field, idx) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="space-y-2"
              >
                <Label className="text-gray-300">{field.label}*</Label>
                <Input
                  type={field.type}
                  name={field.name}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  value={input[field.name]}
                  onChange={changeEventHandler}
                  required
                  className="text-white border-gray-700 focus:border-blue-500 focus:ring-blue-500"
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-2"
            >
              {loading ? (
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled
                >
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing up...
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Sign Up <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center text-sm text-gray-400"
            >
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-400 hover:underline"
              >
                Login
              </Link>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default RecruiterSignup;
