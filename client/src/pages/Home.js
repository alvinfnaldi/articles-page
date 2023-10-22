import React from "react";
import Nav from "../components/Nav";
import Card from "../components/Card";

const Home = () => {

  return (
    <div className="container">
      <div>
        <Nav />
        <h4>Home</h4>
      </div>
      <Card />
    </div>
  );
};

export default Home;
