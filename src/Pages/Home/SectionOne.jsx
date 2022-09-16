import React from "react";
import image from "../../images/Hero.png";

const SectionOne = () => {
  return (
    <>
      <main className="mt-[30px] lg:pl-[7rem] lg:px-0 md:px-0 sm:px-12 md:pl-[2.5rem] px-6">
       <article className="flex items-center lg:mb-[9rem] md:mb-[7rem] sm:mb-[6rem] mb-[3rem] transition-all">
       <section className="flex-1 ">
          <h1 className="text-darkblue-100 font-bold lg:text-[3.2rem] md:text-[2.5rem] sm:text-[2.8rem] text-[1.8rem] lg:mb-5 md:mb-3 sm:mb-4 mb-3 select-none">
            Sell Your Cryptocurrency Fast and With Ease
          </h1>
          <p className="lg:text-[1.3rem] md:text-[1rem] sm:text-[1.3rem] text-[1rem] text-grey-100 md:w-[90%] lg:mb-5 md:mb-3 sm:mb-4 mb-3">
            Trading has never been this seamless. Use TheZ Finance platform to
            sell your Bitcoin, Ethereum and Tether and get your payment within
            minutes.
          </p>
          <div className="relative w-fit h-fit">
            <form>
              <input
                type="email"
                required
                placeholder="Enter Your Email Address"
                className="lg:w-[29rem] md:w-[26rem] sm:w-[25rem] w-[18.4rem] lg:py-[20px] md:py-[17px] sm:py-[15px] py-[10px] focus:outline-0 lg:placeholder:text-base md:placeholder:text-base sm:placeholder:text-md placeholder:text-xs indent-2 relative rounded-sm bg-lightblue-100 transition-all"
              />
              <button
                type="submit"
                className="absolute right-0 self-center bg-darkblue-100 text-white lg:text-base md:text-base sm:text-sm text-[10px] rounded-sm lg:px-2 lg:py-2 md:py-[0.4rem] sm:py-[0.3rem] py-[0.4rem] text-bold md:px-[0.4rem] sm:px-[0.5rem] px-[0.4rem] sm:mr-2 mr-2 lg:top-[13px] md:top-[10px] sm:top-[13px] top-[9px] transition-all"
              >
                Get Download Link
              </button>
            </form>
          </div>
        </section>
        <section className="md:block hidden lg:w-[35rem] md:w-[30rem]">
          <img src={image} alt="" className="w-[100%]" />
        </section>
       </article>
      </main>
    </>
  );
};

export default SectionOne;
