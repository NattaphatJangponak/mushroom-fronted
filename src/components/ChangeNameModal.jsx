import React, { useState } from "react";

function ChangeNameModal({ isOpen, onClose }) {
    const [uuid] = useState("123e4567-e89b-12d3-a456-426614174000"); // Static UUID for demo
    const [username, setUsername] = useState("test@gmail.com");
    const [password, setPassword] = useState("test1234");
    const [pin, setPin] = useState("1234");

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Change name</h2>

                {/* UUID Input (Read-Only) */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">UUID</label>
                    <input
                        type="text"
                        value={uuid}
                        readOnly
                        className="w-full h-12 px-4 rounded-md bg-gray-100 border border-gray-300 text-gray-700 cursor-not-allowed"
                    />
                </div>

                {/* Username Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500 mb-2">Username</label>
                    <input
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-300 text-gray-700"
                    />
                </div>

                {/* Password Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-300 text-gray-700"
                    />
                </div>

                {/* Pin Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500 mb-2">Pin</label>
                    <input
                        type="text"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-300 text-gray-700"
                    />
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={() => alert(`Saved: ${username}, ${password}, ${pin}`)}
                        className="px-6 py-3 bg-black text-white rounded-md text-lg font-semibold"
                    >
                        SAVE CHANGES
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-3 bg-gray-400 text-white rounded-md text-lg font-semibold"
                    >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChangeNameModal;
