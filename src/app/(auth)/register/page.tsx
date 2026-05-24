import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";

import {
  Eye,
  Lock,
  MailIcon,
  Phone,
  User,
} from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      {/* card */}
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 md:p-8">
        
        {/* image */}
        <div className="flex justify-center">
          <Image
            src={logo}
            alt="logo image"
            height={120}
            width={120}
          />
        </div>

        {/* heading */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">
            Create an Account
          </h3>

          <p className="text-gray-500 mt-1">
            Fill in your details to get started
          </p>
        </div>

        {/* form */}
        <form className="space-y-5">

          {/* fullname */}
          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <div className="p-3 rounded-lg border flex items-center border-gray-300 focus-within:border-cyan-500">
              <User
                size={20}
                className="text-gray-400 mr-2"
              />

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* email */}
          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <div className="p-3 rounded-lg border flex items-center border-gray-300 focus-within:border-cyan-500">
              <MailIcon
                size={20}
                className="text-gray-400 mr-2"
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* contact */}
          <div>
            <label className="block mb-2 font-medium">
              Contact Number
            </label>

            <div className="p-3 rounded-lg border flex items-center border-gray-300 focus-within:border-cyan-500">
              <Phone
                size={20}
                className="text-gray-400 mr-2"
              />

              <input
                type="text"
                placeholder="Enter your contact number"
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* gender */}
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            
            <label className="font-medium">
              Gender:
            </label>

            <div className="flex gap-6">
              
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  className="accent-orange-500"
                />

                <label
                  htmlFor="male"
                  className="pl-2"
                >
                  Male
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  className="accent-orange-500"
                />

                <label
                  htmlFor="female"
                  className="pl-2"
                >
                  Female
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  className="accent-orange-500"
                />

                <label
                  htmlFor="other"
                  className="pl-2"
                >
                  Other
                </label>
              </div>

            </div>
          </div>

          {/* password */}
          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="flex items-center border rounded-lg px-3 py-3 border-gray-300 focus-within:border-cyan-500">
              
              <Lock
                className="text-gray-400 mr-2"
                size={20}
              />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none"
              />

              <Eye
                className="text-gray-400 cursor-pointer"
                size={20}
              />
            </div>
          </div>

          {/* confirm password */}
          <div>
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <div className="flex items-center border rounded-lg px-3 py-3 border-gray-300 focus-within:border-cyan-500">
              
              <Lock
                className="text-gray-400 mr-2"
                size={20}
              />

              <input
                type="password"
                placeholder="Confirm your password"
                className="w-full outline-none"
              />

              <Eye
                className="text-gray-400 cursor-pointer"
                size={20}
              />
            </div>
          </div>

          {/* button */}
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg font-semibold transition">
            Register
          </button>

        </form>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link href="/login" className="text-cyan-600 hover:underline font-medium">
              Log in
            </Link>
          </p>
      </div>
    </div>
  );
}