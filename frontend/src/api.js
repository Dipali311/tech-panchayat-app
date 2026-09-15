// frontend/src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

// login function
export const loginUser = async (email, password, role) => {
  try {
    const res = await API.post("/login", {
      email,
      password,
      role: role.toLowerCase(), // ensures it matches DB
    });
    return res.data;
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, message: "Server error" };
  }
};
