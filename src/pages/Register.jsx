import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
    const navigate = useNavigate();
    const [uuid] = useState("123e4567-e89b-12d3-a456-426614174000"); // Static UUID for demo
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white max-w-md w-full border rounded-md shadow-md p-8">
                <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

                {/* UUID (Read-Only) */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">UUID</label>
                    <input
                        type="text"
                        value={uuid}
                        // readOnly
                        className="w-full h-12 px-4 rounded-md bg-gray-100 border border-gray-300 text-gray-700"
                    />
                </div>

                {/* Username Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-300 text-gray-700"
                    />
                </div>

                {/* Email Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-300 text-gray-700"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-300 text-gray-700"
                    />
                </div>

                {/* Confirm Password Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-500">Confirm Password</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-300 text-gray-700"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 bg-gray-400 text-white rounded-md text-lg font-semibold"
                    >
                        BACK
                    </button>
                    <button
                        onClick={() => alert(`Registered: ${username}, ${email}`)}
                        className="px-6 py-3 bg-black text-white rounded-md text-lg font-semibold"
                    >
                        REGISTER
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
