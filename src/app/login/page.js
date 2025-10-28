"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import bgImage from "@/assets/Images/BackgroundImage.png";
import bgImageMobile from "@/assets/Images/mobileloginbgimg.png";
import google from "@/assets/Images/google.png";
import facebook from "@/assets/Images/facebook.png";
import Logo from "@/assets/Images/Logo.png";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://167.71.255.240:8000";

export default function LoginPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Remember login / redirect logic
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const rememberedEmail = localStorage.getItem("rememberedEmail");

    // if (token) router.push("/terminaladmin");

    // if (rememberedEmail) {
    //   setFormData((prev) => ({
    //     ...prev,
    //     email: rememberedEmail,
    //     rememberMe: true,
    //   }));
    // }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please enter both email and password");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signin/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Logged in successfully!");
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("role", data.role);

        if (formData.rememberMe)
          localStorage.setItem("rememberedEmail", formData.email);
        else localStorage.removeItem("rememberedEmail");

        router.push("/terminaladmin");
      } else {
        toast.error(data?.message || "Invalid credentials");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br px-4">
      <div className="grid md:grid-cols-2 w-full max-w-6xl">
        {/* Left Side */}
        <div className="flex flex-col justify-center px-6 md:px-12 text-white">
          <p className="text-xl font-poppins text-white">Login to</p>
          <h1 className="font-playfair-display-sc text-[80px] md:text-7xl font-extrabold leading-tight mb-4">
            SYSTEM
            <br />
            TERMINAL
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center px-6 md:px-12">
          <form
            onSubmit={handleLogin}
            className="bg-transparent font-poppins rounded-lg flex flex-col gap-6"
          >
            {/* Email */}
            <div className="flex flex-col gap-2 w-full">
              <label className="font-bold text-white">
                Enter Your Email{" "}
                <span className="text-[rgba(251,176,59,1)]">*</span>
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                name="email"
                placeholder="youname@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[72px] flex items-center font-medium rounded-md bg-[#1a1c20] border border-[rgba(251,176,59,1)] px-4 py-3 text-white placeholder-[rgba(164,164,164,1)] outline-none focus:border-orange-400 transition"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 w-full relative">
              <label className="font-bold text-white">
                Enter Your Password <span className="text-orange-500">*</span>
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                className="w-full h-[72px] flex items-center font-medium rounded-md bg-[#1a1c20] border border-[rgba(251,176,59,1)] px-4 py-3 text-white placeholder-[rgba(164,164,164,1)] outline-none focus:border-orange-400 transition"
              />
              <span
                className="absolute right-4 top-[56px] cursor-pointer text-gray-400 text-sm"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>

            {/* Remember / Forget */}
            <div className="flex items-center justify-between text-white">
              <label className="font-bold text-white flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="accent-[rgba(251,176,59,1)]"
                />
                Remember me
              </label>
              <Link href="#" className="font-bold">
                Forget Password
              </Link>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className="w-full bg-[rgba(255,155,0,1)] h-[52px] flex items-center justify-center font-bold text-lg text-black max-w-[80%] mx-auto rounded-2xl transition disabled:opacity-70"
            >
              {loading ? "Logging in..." : "Login"}
            </motion.button>

            {/* Footer */}
            <div className="font-poppins text-center text-xs text-white mt-4">
              <p>
                <span className="opacity-90">{`DON’T HAVE AN ACCOUNT?`} </span>
                <Link
                  href="#"
                  className="text-white font-semibold tracking-[8%]"
                >
                  SIGN UP
                </Link>
              </p>
              <p className="mt-4 text-[12.5px] font-medium opacity-90 text-white">
                By registering you with our{" "}
                <Link href="#" className="text-[rgba(255,155,0,1)]">
                  Terms and Conditions
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
