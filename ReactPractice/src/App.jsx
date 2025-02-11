import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FinalNav from "./FinalProject/FinalNav";
import HomePage from "./FinalProject/HomePage";
import Register from "./FinalProject/Register";
import Table from "./FinalProject/Table";
import FinalFooter from "./FinalProject/FinalFooter";
import HomePageById from "./FinalProject/HomePageById";
import Edit from "./FinalProject/Edit";
import Delete from "./FinalProject/Delete";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <FinalNav></FinalNav>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/table" element={<Table />}></Route>
          <Route path="/view/:id" element={<HomePageById />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="/delete/:id" element={<Delete />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
      </Router>
      {/* <FinalFooter></FinalFooter> */}
    </>
  );
}

export default App;
