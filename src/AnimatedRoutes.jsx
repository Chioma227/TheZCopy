import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import FAQ from "./Pages/FAQs/FAQ";
import Testimonial from "./Pages/Testimonials/Testimonial";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/testimonials" element={<Testimonial />} />
        <Route exact path="/faqs" element={<FAQ />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
