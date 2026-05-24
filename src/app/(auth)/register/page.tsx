import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";
import { Eye, Lock, MailIcon, Phone, User } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src={logo}
            alt="RentExpress Logo"
            width={180}
            height={100}
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">Create an Account</h3>
          <p className="text-gray-500 mt-1">
            Fill in your details to get started
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>
            <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
              <User className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>
            <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
              <MailIcon className="text-gray-400 mr-2" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Contact */}
          <div>
            <label className="block mb-2 font-medium">
              Contact Number
            </label>
            <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
              <Phone className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                placeholder="Enter your contact number"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 font-medium">
              Gender
            </label>
            <div className="flex gap-6">
              <div>
                <input type="radio" id="male" name="gender" value="male" className="accent-cyan-500" />
                <label htmlFor="male" className="pl-2">Male</label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" value="female" className="accent-cyan-500" />
                <label htmlFor="female" className="pl-2">Female</label>
              </div>
              <div>
                <input type="radio" id="other" name="gender" value="other" className="accent-cyan-500" />
                <label htmlFor="other" className="pl-2">Other</label>
              </div>
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
              <Lock className="text-gray-400 mr-2" size={20} />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none"
              />
              <Eye className="text-gray-400 cursor-pointer" size={20} />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>
            <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
              <Lock className="text-gray-400 mr-2" size={20} />
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full outline-none"
              />
              <Eye className="text-gray-400 cursor-pointer" size={20} />
            </div>
          </div>

          {/* Button */}
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition">
            Register
          </button>

        </form>

        {/* Login */}
        <p className="text-center mt-6">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-cyan-500 font-semibold hover:underline cursor-pointer">
              Login
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
}