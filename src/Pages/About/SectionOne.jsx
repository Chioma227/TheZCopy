import React from "react";
import { motion } from "framer-motion";
import imageOne from "../../images/Rectangle 13.png";
import imageTwo from "../../images/Rectangle 2045.png";
import phoneOne from '../../images/phone2.png'
import { useAnimation } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const firstMotion = {
  rest:{
    x: "0",
    transition:{
      type: "tween",
      duration: 0.5
    }
  },
  hover:{
    x:"-13vw",
    transition:{
      duration:0.5,
      type:"tween"
    }
  }
}
const secondMotion = {
  rest:{
    x: "0",
    transition:{
      type: "tween",
      duration: 0.5
    }
  },
  hover:{
    x:"10vw",
    transition:{
      type:"tween",
      duration:0.5,
    }
  }
}

const SectionTwo = () => {
  const {ref, inView} = useInView();
  const animationOne = useAnimation()
  const animationTwo = useAnimation()
  useEffect(()=>{
    if(inView){
      animationOne.start({
        x: "-10vw",
        transition:{type:"tween", duration:0.5}
      })
    }
    if(!inView){
      animationOne.start({
        x: 0,
        transition:{type:"tween", duration:0.5}
      })
    }
  }, inView)

  useEffect(()=>{
    if(inView){
      animationTwo.start({
        x: "10vw",
        transition:{type:"tween", duration:0.5}
      })
    }
    if(!inView){
      animationTwo.start({
        x: 0,
        transition:{type:"tween", duration:0.5}
      })
    }
  }, inView)

  return (
    <>
      <article className="lg:mb-32 md:mb-32 sm:mb-24 xs:mb-14 mb-3">
        <main className="lg:h-[110vh] md:h-[100vh] sm:h-[80vh] h-[70vh] bg-lighterblue-100 lg:px-[5rem] lg:py-[4.4rem] md:py-[4rem] sm:py-[3.4rem] xs:py-[2.7rem] w-full md:px-8 sm:px-14 xs-px-9 text-center">
          <section className="text_section">
            <div className="relative mx-auto items-center lg:w-[650px] md:w-[440px] sm:w-[390px] w-[280px]">
              <div className="absolute left-0 lg:w-[1.3rem] md:w-[1rem] sm:w-[.9rem] w-[.7rem]">
                <img src={imageOne} alt="" />
              </div>
              <div className="absolute right-0 lg:w-[1.3rem] md:w-[1rem] sm:w-[.9rem] w-[.7rem]">
                <img src={imageTwo} alt="" />
              </div>
              <h3 className="lg:text-[50px] md:text-[2rem] sm:text-[1.8rem] text-[1.3rem]  font-bold text-darkblue-100 lg:mb-4 md:mb-3 sm:mb-[15px] mb-[13px]">TheZ Finance Exchange</h3>
            </div>
            <p className="lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1rem] text-[1rem] lg:w-[73%] md:w-[80%] sm:w-[70%] xs:w-[80%] mx-auto text-grey-100">
              TheZ Finance Exchange is a very secured platform that prides
              itself as the safest and the most seamless exchange to send
              cryptocurrencies. Transact with TheZ Finance and get paid in
              minutes.
            </p>
          </section>
        </main>

        {/* desktop animation start */}
        <motion.section initial="rest" whileHover="hover" animate="rest" className="relative lg:flex hidden w-full justify-center mx-auto lg:mt-[-28rem] md:mt-[-23rem] sm:mt-[-18rem] mt-[-10rem] lg:mb-[48rem] md:mb-[35rem] sm:mb-[30rem] mb-[18rem]">
          <motion.div
          variants={firstMotion}
            className="lg:w-[480px] md:w-[380px] sm:w-[320px] absolute w-[172px] lg:mr-[320px] md:mr-[290px] sm:mr-[250px] mr-[120px]"
          >
            <img src={phoneOne} alt="" className=" rotate-[-50deg]"/>
          </motion.div>
          <motion.div 
          variants={secondMotion}
          className="lg:w-[480px] md:w-[380px] sm:w-[320px] w-[172px] absolute lg:left-[49%] md:left-[47%] sm:left-[46.9%] left-[44%] top-0">
            <img src={phoneOne} alt="" />
          </motion.div>
        </motion.section>
        {/* desktop animation ends */}

        {/* medium screen animation starts */}
        <motion.section ref={ref} className="relative lg:hidden flex w-full justify-center mx-auto lg:mt-[-28rem] md:mt-[-23rem] sm:mt-[-18rem] mt-[-10rem] lg:mb-[48rem] md:mb-[35rem] sm:mb-[30rem] mb-[18rem]">
          <motion.div
          animate={animationOne}
            className="lg:w-[480px] md:w-[380px] sm:w-[320px] absolute w-[172px] lg:mr-[320px] md:mr-[290px] sm:mr-[250px] mr-[120px]"
          >
            <img src={phoneOne} alt="" className=" rotate-[-50deg]"/>
          </motion.div>
          <motion.div 
          animate={animationTwo}
          className="lg:w-[480px] md:w-[380px] sm:w-[320px] w-[172px] absolute lg:left-[49%] md:left-[47%] sm:left-[46.9%] left-[44%] top-0">
            <img src={phoneOne} alt="" />
          </motion.div>
        </motion.section>
        {/* medium screen animation ends */}

      </article>
    </>
  );
};

export default SectionTwo;
