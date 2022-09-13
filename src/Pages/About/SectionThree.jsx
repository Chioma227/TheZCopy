import React from "react";
import imageOne from "../../images/BtCTransaction.png";
import check from "../../images/checkIcon.png";

const SectionThree = () => {
  return (
    <>
      <article className="lg:flex md:flex hidden items-center justify-between w-full ml-auto mr-auto lg:px-20 md:px-[2.5rem] lg:mb-20">
        <main className="about_section flex-grow-2 flex-shrink-1">
          <aside>
            <section className="bg-white w-[100%] shadow-md rounded-tl-3xl rounded-tr-sm rounded-b-sm mt-5">
              <div className="flex items-baseline gap-6 px-2 py-7">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="text-[1.4rem] font-bold text-gray-800 mb-3">
                    Safe Transaction Security
                  </h3>
                  <p className="text-sm md:text-lg lg:text-xl text-grey-100">
                    TheZ Finance Mobile App is one that provides safe and
                    secured transaction experience by means of strict
                    transaction verification process.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white w-[100%] shadow-md rounded-tl-3xl rounded-tr-sm rounded-b-sm mt-5">
              <div className="flex items-baseline gap-6 px-2  py-7">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="text-[1.4rem] font-bold text-gray-800 mb-3">
                    Quick Transaction Verification and Payment
                  </h3>
                  <p className="text-xl text-grey-100">
                    Verification of transaction is seamless and absolutely
                    transparent. After verification, Payment is done immediately
                    with zero or no worries.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white w-[100%] shadow-md rounded-tl-3xl rounded-tr-sm rounded-b-sm mt-5">
              <div className="flex items-baseline gap-6 px-2 py-7">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="text-[1.4rem] font-bold text-gray-800 mb-3">
                    Great Customer Support
                  </h3>
                  <p className="text-xl text-grey-100">
                    Our Customer support is 24 hours active to respond to
                    transaction disputes, queries or questions that might need
                    answers.
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </main>
        <section className="flex-1 flex-basis">
         <div className="ml-auto lg:w-[90%] md:w-[300px] sm:w-[250px] w-[200px] ">
         <img src={imageOne} alt="" className="w-[100%] single" />
         </div>
        </section>
      </article>


      <main className="lg:hidden md:hidden block sm:px-12 px-6 about_section">
          <aside>
            <section className="bg-white w-[100%] shadow-md rounded-tl-3xl rounded-tr-sm rounded-b-sm lg:mt-5 md:mt-4 mt-2">
              <div className="flex items-baseline gap-6 px-2 py-3">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="lg:text-[1.4rem] md:text-[1.2rem] text-1.1rem font-bold text-gray-800 mb-2">
                  Safe Transaction Security
                  </h3>
                  <p className="sm:text-[1.2rem] text-[1rem] text-grey-100">
                  TheZ Finance Mobile App is one that provides safe and
                    secured transaction experience by means of strict
                    transaction verification process.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white w-[100%] shadow-md rounded-tl-3xl rounded-tr-sm rounded-b-sm mt-5">
              <div className="flex items-baseline gap-6 lg:px-2 px-3 py-3">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="lg:text-[1.4rem] md:text-[1.2rem] text-1.1rem font-bold text-gray-800 mb-2">
                  Quick Transaction Verification and Payment
                  </h3>
                  <p className="sm:text-[1.2rem] text-[1rem] text-grey-100">
                  Verification of transaction is seamless and absolutely
                    transparent. After verification, Payment is done immediately
                    with zero or no worries.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white w-[100%] shadow-md rounded-tl-3xl rounded-tr-sm rounded-b-sm mt-5 mb-14">
              <div className="flex items-baseline gap-6 px-2 py-3">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="lg:text-[1.4rem] md:text-[1.2rem] text-1.1rem font-bold text-gray-800 mb-2">
                  Great Customer Support
                  </h3>
                  <p className="sm:text-[1.2rem] text-[1rem] text-grey-100">
                  Our Customer support is 24 hours active to respond to
                    transaction disputes, queries or questions that might need
                    answers.
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </main>
    </>
  );
};

export default SectionThree;
