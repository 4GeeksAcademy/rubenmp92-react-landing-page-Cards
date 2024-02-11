import React from "react";

const greyColor = {
    backgroundColor: "#D3D3D3"
}

const Jumbotron = () =>{
    return (
      <div className="card">
        <div className="card-body pb-5 pt-5" style={greyColor}>
          <h1 className="card-title">A Warm Welcome!</h1>
          <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="#" className="btn btn-primary">
            Call to action!
          </a>
        </div>
      </div>
    );
}

export default Jumbotron;


