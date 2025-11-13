import React from "react";
import logo from '../../assets/logo.svg';
import Header from '../../components/header';

const Hero = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    window.location.reload();
  };
  return (
    <div>
      
    </div>
  );
};

export default Hero;
