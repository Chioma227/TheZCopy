import React from "react";
import { motion } from "framer-motion";
import phoneOne from "../../images/Phone1.png";
import phoneTwo from "../../images/phone2.png";
import imageOne from "../../images/Rectangle 13.png";
import imageTwo from "../../images/Rectangle 2045.png";

const SectionTwo = () => {
  return (
    <>
      <article className="lg:mb-32 md:mb-32 sm:mb-24 xs:mb-14 mb-3">
        <main className="sectionTwo">
          <section className="text_section">
            <div className="heading_two ">
              <div className="angleImage_one">
                <img src={imageOne} alt="" />
              </div>
              <div className="angleImage_two">
                <img src={imageTwo} alt="" />
              </div>
              <h3>TheZ Finance Exchange</h3>
            </div>
            <p>
              TheZ Finance Exchange is a very secured platform that prides
              itself as the safest and the most seamless exchange to send
              cryptocurrencies. Transact with TheZ Finance and get paid in
              minutes.
            </p>
          </section>
        </main>
        <section className="animated_area">
          <motion.div
            // initial={{x: 0}}
            // transition={{type:'tween', duration: 2}}
            // whileInView={{x: -170 }}
            className="image_one"
          >
            <img src={phoneOne} alt="" />
          </motion.div>
          <motion.div className="image_two">
            <img src={phoneTwo} alt="" />
          </motion.div>
        </section>
      </article>
    </>
  );
};

export default SectionTwo;
