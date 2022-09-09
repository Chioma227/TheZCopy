import React from "react";
import SectionOne from "./SectionOne";
import { motion } from "framer-motion";
import About from '../About/About'
import FAQ from "../FAQs/FAQ";
import Testimonial from "../Testimonials/Testimonial";

const Home = () => {
  return (
    <>
      <motion.div
       initial={{y:'-90vh'}}
       animate={{y:"0"}}
       exit={{y: '100vh'}}
      >
        <SectionOne />
        <About/>
        <Testimonial/>
        <FAQ/>
      </motion.div>
    </>
  );
};

export default Home;
