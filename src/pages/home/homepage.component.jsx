import React from "react";
import Subheader from "../../components/subheader/subheader";
import Parallax from "../../components/parallax/parallax";
import NavBar from "../../components/navigation/navbar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Subheader />
      <Parallax />
    </div>
  );
};

export default HomePage;