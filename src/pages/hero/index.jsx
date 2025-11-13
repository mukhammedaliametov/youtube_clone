import React from "react";

const Hero = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLogged");
    window.location.reload();
  };
  return (
    <div>
      home
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Hero;
