"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";
import { Eye, EyeOff, Lock, MailIcon, Phone, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "../../_schema/schema";

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: "",
            email: "",
            contactNumber: "",
            gender: undefined,
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit = (data: RegisterFormData) => {
        alert(`Registered: ${data.fullName}, ${data.email}`);
        // later you will replace alert with your API call
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">

        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-xl">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src={logo} alt="RentExpress Logo" width={180} 
          height={100} />
        </div>

        {/* Heading */}
        <div className="text-center mb-6">
           <h3 className="text-2xl font-bold">Create an Account</h3>
           <p className="text-gray-500 mt-1">Fill in your details to get started</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                    {/* Full Name */}
                    <div>
                        <label className="block mb-2 font-medium">Full Name</label>
                        <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
                            <User className="text-gray-400 mr-2" size={20} />
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full outline-none"
                                {...register("fullName")}
                            />
                        </div>
                        {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 font-medium">Email Address</label>
                        <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
                            <MailIcon className="text-gray-400 mr-2" size={20} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full outline-none"
                                {...register("email")}
                            />
                        </div>
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Contact */}
                    <div>
                        <label className="block mb-2 font-medium">Contact Number</label>
                        <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
                            <Phone className="text-gray-400 mr-2" size={20} />
                            <input
                                type="text"
                                placeholder="Enter your contact number"
                                className="w-full outline-none"
                                {...register("contactNumber")}
                            />
                        </div>
                        {errors.contactNumber && (
                            <p className="text-red-500 text-sm mt-1">{errors.contactNumber.message}</p>
                        )}
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block mb-2 font-medium">Gender</label>
                        <div className="flex gap-6">
                            <div>
                                <input type="radio" id="male" value="male" className="accent-cyan-500" {...register("gender")} />
                                <label htmlFor="male" className="pl-2">Male</label>
                            </div>
                            <div>
                                <input type="radio" id="female" value="female" className="accent-cyan-500" {...register("gender")} />
                                <label htmlFor="female" className="pl-2">Female</label>
                            </div>
                            <div>
                                <input type="radio" id="other" value="other" className="accent-cyan-500" {...register("gender")} />
                                <label htmlFor="other" className="pl-2">Other</label>
                            </div>
                        </div>
                        {errors.gender && (
                            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-2 font-medium">Password</label>
                        <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
                            <Lock className="text-gray-400 mr-2" size={20} />
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="w-full outline-none"
                                {...register("password")}
                            />
                            <div onClick={() => setShowPassword(!showPassword)}>
                                {showPassword
                                    ? <EyeOff className="text-gray-400 cursor-pointer" size={20} />
                                    : <Eye className="text-gray-400 cursor-pointer" size={20} />
                                }
                            </div>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-2 font-medium">Confirm Password</label>
                        <div className="flex items-center border rounded-lg px-3 py-3 border-gray-400 focus-within:border-cyan-500">
                            <Lock className="text-gray-400 mr-2" size={20} />
                            <input
                                type={showConfirm ? "text" : "password"}
                                placeholder="Confirm your password"
                                className="w-full outline-none"
                                {...register("confirmPassword")}
                            />
                            <div onClick={() => setShowConfirm(!showConfirm)}>
                                {showConfirm
                                    ? <EyeOff className="text-gray-400 cursor-pointer" size={20} />
                                    : <Eye className="text-gray-400 cursor-pointer" size={20} />
                                }
                            </div>
                        </div>
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                        )}
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
                    >
                        {isSubmitting ? "Registering..." : "Register"}
                    </button>
                </form>

                {/* Login Link */}
                <p className="text-center mt-6">
                    Already have an account?{" "}
                    <Link href="/login">
                        <span className="text-cyan-500 font-semibold hover:underline cursor-pointer">Login</span>
                    </Link>
                </p>

            </div>
        </div>
    );
}