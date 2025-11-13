import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  useEffect(() => {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged) {
      navigate("/"); 
    }
  }, [navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "https://6915c6cd465a9144626d8a12.mockapi.io/youtube_auth_data"
      );
      const users = res.data;

      const user = users.find(
        (u) =>
          u.username === formData.username && u.password === formData.password
      );

      if (user) {
        localStorage.setItem("isLogged", "true");
        alert("Login successful");
        navigate("/");
      } else {
        alert("Incorrect username or password");
      }
    } catch (error) {
      console.error(error);
      alert("Error");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#212121] px-[16px] xl:px-0">
      <form
        onSubmit={handleSubmit}
        className="bg-[#303030] text-white p-8 rounded-xl shadow-md w-[400px] flex flex-col gap-[20px]"
      >
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="border p-3 rounded-lg outline-none opacity-60 focus:opacity-100"
          autoComplete="off"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border p-3 rounded-lg outline-none opacity-60 focus:opacity-100"
          autoComplete="off"
          required
        />
        <p className="flex items-center justify-between opacity-80 text-[15px]">
          <span>Don't have an account?</span>{" "}
          <Link to="/register" className="underline text-blue-600">
            Register
          </Link>
        </p>
        <button
          type="submit"
          className="bg-[#FF0000] hover:opacity-80 text-white tracking-[1.1px] cursor-pointer font-medium py-3 rounded-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
