import React from "react";
import imageOne from "../../images/TransactionMobile.png";
import check from "../../images/checkIcon.png";
import angleImg1 from "../../images/Rectangle 13.png";
import angleImg2 from "../../images/Rectangle 2045.png";

const SectionTwo = () => {
  return (
    <>
      {/* section displayed on large and medium screen start */}

      <article className=" md:flex lg:flex hidden items-center gap-[3rem] w-full lg:px-[7rem] md:px-[2.5rem] lg:mb-32 mb-10">
        <section className="flex-1 flex-basis flex justify-center items-center">
            <div className="lg:w-[350px] md:w-[300px] sm:w-[250px] w-[200px]  transition-all">
              <img src={imageOne} alt="" className="w-[100%] object-cover" />
            </div>
        </section>
        <main className="about_section w-[100%] ">
          <div className="relative lg:w-[90%] md:w-[76%]">
            <div className="absolute left-0 lg:w-[1.3rem] md:w-[1rem]">
              <img src={angleImg1} alt="" />
            </div>
            <div className="absolute right-0 lg:w-[1.3rem] md:w-[1rem]">
              <img src={angleImg2} alt="" />
            </div>
            <h3 className="text-center lg:text-[3rem] md:text-[25px] lg:tracking-tight  text-darkblue-100 font-bold mb-3">
              About TheZ Finance App
            </h3>
          </div>
          <p className="text-grey-100 lg:w-[90%] lg:text-xl md:text-[1rem] text-sm lg:mb-[5rem] md:mb-5">
            Take a look at what makes TheZ Finance Mobile App stand out from
            other paltforms
          </p>
          <aside className="lg:block md:block sm:hidden">
            <section className="bg-white w-[100%] shadow-md rounded-br-3xl rounded-t-sm rounded-bl-sm lg:mt-5 md:mt-4 mt-2">
              <div className="flex items-baseline gap-6 px-3 lg:py-7 sm:py-3">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="lg:text-[1.4rem] md:text-[1.2rem] sm:text-[1.1rem] font-bold text-gray-800 mb-2">
                    Easy To Use
                  </h3>
                  <p className="lg:text-xl md:text-[1rem] text-sm text-grey-100">
                    TheZ Finance Mobile App is one that is easy to navigate and
                    use. Important features are easily accessible and seamless
                    in usage.
                  </p>
                </div>
              </div>
            </section>
            <section className="bg-white w-[100%] shadow-md rounded-br-3xl rounded-t-sm rounded-bl-sm mt-5">
              <div className="flex items-baseline gap-6 px-3 lg:py-7 sm:py-3">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="lg:text-[1.4rem] md:text-[1.2rem] text-1.1rem font-bold text-gray-800 mb-2">
                    Great User Experience
                  </h3>
                  <p className="lg:text-xl md:text-[1rem] text-sm text-grey-100">
                    The overall experience of users has been 100% great and
                    pleasurable. 10 out of 10 users vote in favour of how great
                    their experiences were while using the application.
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </main>
      </article>
      {/* section displayed on large and medium screen end */}

      {/* section displayed on small screen start */}
      <main className="lg:hidden md:hidden block sm:px-12 px-6 about_section">
        <div className="relative  sm:w-[430px] w-[280px] ">
          <div className="absolute left-0 sm:w-[.9rem] w-[.7rem]">
            <img src={angleImg1} alt="" />
          </div>
          <div className="absolute right-0 sm:w-[.9rem] w-[.7rem]">
            <img src={angleImg2} alt="" />
          </div>
          <h3 className="text-center sm:text-[2rem] text-[1.3rem] lg:tracking-tight  text-darkblue-100 font-bold mb-3">
            About TheZ Finance App
          </h3>
        </div>
        <p className="text-grey-100 sm:text-[1.2rem] text-[1rem] lg:mb-7 md:mb-10 mb-8">
          Take a look at what makes TheZ Finance Mobile App stand out from other
          paltforms
        </p>
        <aside>
          <section className="bg-white w-[100%] shadow-md rounded-br-3xl rounded-t-sm rounded-bl-sm lg:mt-5 md:mt-4 mt-2">
            <div className="flex items-baseline gap-6 lg:px-2 px-3 py-3">
              <img src={check} alt="" className="w-[20px]" />
              <div>
                <h3 className="lg:text-[1.4rem] md:text-[1.2rem] text-1.1rem font-bold text-gray-800 mb-2">
                  Easy To Use
                </h3>
                <p className="sm:text-[1.2rem] text-[1rem] text-grey-100">
                  TheZ Finance Mobile App is one that is easy to navigate and
                  use. Important features are easily accessible and seamless in
                  usage.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white w-[100%] shadow-md rounded-br-3xl rounded-t-sm rounded-bl-sm mt-5 mb-9">
            <div className="flex items-baseline gap-6 lg:px-2 px-3 py-3">
              <img src={check} alt="" className="w-[20px]" />
              <div>
                <h3 className="lg:text-[1.4rem] md:text-[1.2rem] text-1.1rem font-bold text-gray-800 mb-2">
                  Great User Experience
                </h3>
                <p className="sm:text-[1.2rem] text-[1rem] text-grey-100">
                  The overall experience of users has been 100% great and
                  pleasurable. 10 out of 10 users vote in favour of how great
                  their experiences were while using the application.
                </p>
              </div>
            </div>
          </section>
        </aside>
      </main>

      {/* section displayed on small screen end */}
    </>
  );
};

export default SectionTwo;
