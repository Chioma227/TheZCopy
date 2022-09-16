import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import DownloadApp from "./Pages/Home/DownloadApp";
import AnimatedRoutes from "./AnimatedRoutes";

export default function App() {
  return (
    <div>
        <Navbar />
        <AnimatedRoutes />
        <DownloadApp />
        <Footer />
    </div>
  );
}
