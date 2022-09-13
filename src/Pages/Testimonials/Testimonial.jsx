import React from "react";
import mockData from "./mockData";
import arrowLeft from "../../images/arrow-left.svg";
import arrowRight from "../../images/arrow-right.svg";
import imageOne from "../../images/Rectangle 13.png";
import imageTwo from "../../images/Rectangle 2045.png";
import quoteIcon from '../../images/QuoteIcon.png'

function App() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <>
      <main className="w-full mt-[4rem] ">
        <section className="lg:flex lg:px-[5rem] lg:mb-[50px] md:px-8 sm:px-14 px-6 md:flex block items-center justify-between">
          <div>
            <div className="relative lg:w-[450px] md:w-[300px] sm:w-[340px] w-[210px]">
              <div className="absolute left-0 lg:w-[1.3rem] md:w-[1rem] sm:w-[.9rem] w-[.7rem]">
                <img src={imageOne} alt="" />
              </div>
              <div className="absolute right-0 lg:w-[1.3rem] md:w-[1rem] sm:w-[.9rem] w-[.7rem]">
                <img src={imageTwo} alt="" />
              </div>
              <h2 className="lg:text-[3rem] md:text-[1.8rem] sm:text-[2.1rem] text-[1.4rem] text-center  font-bold text-darkblue-100 lg:mb-5 md:mb-3 sm:mb-3 mb-2 ">
                TESTIMONIALS
              </h2>
            </div>
            <p className="lg:text-[1.4rem] md:text-xl sm:text-[1.2rem] text-[1rem] md:mb-[2.4rem] sm:mb-[2rem] mb-[.8rem]  md:w-[65%] text-grey-100">
              See what our users have to say about TheZ Finance Exchange. You
              too can testify, Download TheZ Finance App today.
            </p>
          </div>
          <div className="flex items-center justify-end md:gap-4 gap-2  text-darkblue-100">
            <div className="">
              <img
                src={arrowLeft}
                alt=""
                onClick={slideLeft}
                className="cursor-pointer lg:w-[3.8rem] md:w-[3.4rem] sm:w-[2.7rem] w-[2rem]"
              />
            </div>
            <div className="">
              <img
                src={arrowRight}
                alt=""
                onClick={slideRight}
                className="cursor-pointer lg:w-[3.8rem] md:w-[3.4rem] sm:w-[2.7rem] w-[2rem]"
              />
            </div>
          </div>
        </section>
        <div className="relative flex lg:pl-[5rem] md:pl-8 sm:pl-14 pl-6 items-center">
          <div
            id="slider"
            className="flex gap-7 overflow-x-hidden overflow-y-hidden scroll scroll-smooth scrollbar-hide"
          >
            {mockData.map((item) => {
              const { img, testimony, name, id } = item;
              return (
                <section key={id} className="relative w-[890px] h-fit py-5 px-4 border-2">
                  <div className="absolute w-[50px] left-5 mt-[-80px]">
                    <img src={quoteIcon} alt=""/>
                  </div>
                  <main className=" gap-3 flex items-center justify-center">
                    <div className="flex-1">
                      <p className="">"{testimony}"</p>
                      <p>- {name}</p>
                    </div>
                    <div className="w-[600px] h-[400px] flex-1">
                      <img src={img} alt="" className="w-[100%] h-[100%] object-cover"/>
                    </div>
                  </main>
                </section>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
