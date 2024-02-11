import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Cards from "./Cards";
import Jumbotron from "./Jumbotron";

//create your first component
const Home = () => {
  return (
    <div>
      <Navbar />
	  <Jumbotron />
      <div className="row justify-content-center">
          <Cards className="col-md-4" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
