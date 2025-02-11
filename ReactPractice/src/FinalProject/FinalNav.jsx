import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalFooter from "./FinalFooter";
import "bootstrap/dist/css/bootstrap.min.css";

function FinalNav() {
  return (
    <>
      <div className="bg-secondary p-4 position-sticky sticky-top">
        <nav className="d-flex justify-content-around text-danger fw-bold">
          <Link to="/" className="text-white text-decoration-none ">
            HomePage
          </Link>
          <Link to="register" className="text-white text-decoration-none">
            Register
          </Link>
          <Link to="table" className="text-white text-decoration-none">
            Table
          </Link>
        </nav>
      </div>
    </>
  );
}

export default FinalNav;
