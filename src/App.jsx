import React from "react";
import Login from "./pages/login/index";
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/hero";
import PrivateRoute from "./components/private-route";
import Register from "./pages/register";
import MainLayout from "./layouts/main";
import Details from "./components/details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<Hero />}></Route>
          <Route path="/video/:id" element={<Details />}></Route>
        </Route>
      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route
        path="/*"
        element={
          <div className="flex justify-center items-center bg-[#212121] h-screen text-white">
            404 | Not Found
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default App;
