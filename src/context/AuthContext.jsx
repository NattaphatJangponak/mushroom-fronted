import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode"; // Import jwt-decode

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // Check if user is already logged in (decode token)
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                // Decode JWT to get user info
                const decoded = jwtDecode(token);

                // Check if token is expired
                if (decoded.exp * 1000 < Date.now()) {
                    logout(); // If expired, logout user
                } else {
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                    setUser(decoded.username); // Store user info
                }
            } catch (error) {
                logout(); // Logout if token is invalid
            }
        }
    }, []);

    // Login function
    const login = async (username, password) => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { username, password });
            const { token } = response.data;

            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            // Decode token to get user data
            const decoded = jwtDecode(token);
            
            setUser({ id:decoded.id,username: decoded.username , password : decoded.password});

            return true;
        } catch (error) {
            console.error(error)
            console.error("Login failed:", error.response?.data?.message || error.message);
            return false;
        }
    };

    const updateUser = async (id, userData) => {
        try {
            console.log("📌 API Request - Updating user:", id, userData); // ✅ Debugging
            const response = await axios.put(`http://localhost:5000/api/auth/update/${id}`, userData);
            console.log("✅ User updated successfully:", response.data);
    
            // ✅ อัปเดตข้อมูล user ใน state
            setUser(prevUser => ({
                ...prevUser,
                username: userData.username, // ✅ อัปเดต username
                password: userData.password  // ✅ อัปเดต password
            }));
    
            return true;
        } catch (error) {
            console.error("❌ Error updating user:", error.response?.data || error.message);
            return false;
        }
    };
    
  

// const updateUser = async (id, userData) => {
//     try {
//         const response = await axios.put(`http://localhost:5000/api/user/update/${id}`, userData);
//         console.log("User updated:", response.data);
//         return true;
//     } catch (error) {
//         console.error("Error updating user:", error.response?.data || error.message);
//         return false;
//     }
// };


    // Register function
    const register = async (username, password) => {
        try {
            await axios.post("http://localhost:5000/api/auth/register", { username, password });
            return true;
        } catch (error) {
            console.error("Registration failed:", error.response?.data?.message || error.message);
            return false;
        }
    };

    // Logout function  
    const logout = () => {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
