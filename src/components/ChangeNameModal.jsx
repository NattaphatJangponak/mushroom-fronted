import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function ChangeNameModal({ isOpen, onClose }) {
    const { user, updateUser } = useContext(AuthContext);
    const [username, setUsername] = useState(user?.username ?? "");
    const [password, setPassword] = useState(user?.password ?? "");
    const [showPassword, setShowPassword] = useState(false);
 


    
    // ✅ ฟังก์ชันสำหรับบันทึกข้อมูล
    const saveUser = async () => {
        if (!user?.id) {
            alert("User ID is missing!");
            return;
        }

        const updatedData = { username, password, pin };
        const success = await updateUser(user.id, updatedData);

        if (success) {
            alert("User updated successfully!");
            onClose(); // ✅ ปิด Modal หลังจากอัปเดตสำเร็จ
        } else {
            alert("Failed to update user.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Change name</h2>

                {/* Username Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-500 mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-300 text-gray-700"
                    />
                </div>

                {/* Password Input */}
                <div className="relative mb-4">
                    <label className="block text-sm font-medium text-gray-500 mb-2">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-12 px-4 rounded-md bg-gray-50 border border-gray-300 text-gray-700 pr-10"
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute mt-7 inset-y-0 right-3 flex items-center text-gray-500"
                    >
                        {showPassword ? "🙈" : "👁"}
                    </button>
                </div>

                {/* Buttons */}
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={saveUser} // ✅ เรียกใช้ saveUser เพื่ออัปเดตข้อมูล
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
