import React from "react";
// import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import {Router } from "react-router-dom";
import "../src/Pages/Home/home.css";
import "../src/Pages/About/about.css";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./Pages/Home/DownloadApp";
import AnimatedRoutes from "./AnimatedRoutes";

export default function App() {
  return (
    <div>
      {/* <Router> */}
        <Navbar />
        <AnimatedRoutes />
        <DownloadApp />
        <Footer />
      {/* </Router> */}
    </div>
  );
}
