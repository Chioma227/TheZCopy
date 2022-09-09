import React from "react";
import imageOne from "../../images/TransactionMobile.png";
import check from "../../images/checkIcon.png";
// import angleImg1 from "../../images/Rectangle 13.png";
// import angleImg2 from "../../images/Rectangle 2045.png";

const SectionTwo = () => {
  return (
    <>
    {/* section displayed on large and medium screen start */}

      <article className=" md:flex lg:flex hidden lg:items-center w-full ml-auto mr-auto px-20 lg:mb-32 mb-10">
        <section className="flex-1 flex-basis">
          <div className="lg:w-[70%] md:w-[300px] sm:w-[250px] w-[200px]  transition-all">
            <img src={imageOne} alt="" className="w-[100%]" />
          </div>
        </section>
        <main className="about_section flex-1">
          <h3 className="text-[15px] md:text-[25px] lg:tracking-tight xl:text-[36px] text-darkblue-100 font-bold mb-3">
            About TheZ Finance App
          </h3>
          <p className="text-grey-100 lg:text-xl md:text-[1rem] text-sm lg:mb-7 md:mb-5">
            Take a look at what makes TheZ Finance Mobile App stand out from
            other paltforms
          </p>
          <aside className="lg:block md:block sm:hidden">
            <section className="bg-white w-[100%] shadow-md rounded-br-3xl rounded-t-sm rounded-bl-sm lg:mt-5 md:mt-4 mt-2">
              <div className="flex items-baseline gap-6 px-2 py-3">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="lg:text-[1.4rem] md:text-[1.2rem] text-1.1rem font-bold text-gray-800 mb-2">
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
              <div className="flex items-baseline gap-6 px-2 py-3">
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
      <main className="lg:hidden md:hidden block sm:px-20 xs:px-9 about_section">
          <h3 className="sm:text-[25px] text-[20px] tracking-tight text-darkblue-100 font-bold sm:mb-3 xs:mb-2">
            About TheZ Finance App
          </h3>
          <p className="text-grey-100 sm:text-[1.2rem] text-[.8rem] lg:mb-7 md:mb-10 mb-8">
            Take a look at what makes TheZ Finance Mobile App stand out from
            other paltforms
          </p>
          <aside>
            <section className="bg-white w-[100%] shadow-md rounded-br-3xl rounded-t-sm rounded-bl-sm lg:mt-5 md:mt-4 mt-2">
              <div className="flex items-baseline gap-6 lg:px-2 px-3 py-3">
                <img src={check} alt="" className="w-[20px]" />
                <div>
                  <h3 className="lg:text-[1.4rem] md:text-[1.2rem] text-1.1rem font-bold text-gray-800 mb-2">
                    Easy To Use
                  </h3>
                  <p className="sm:text-[1.2rem] text-[.9rem] text-grey-100">
                    TheZ Finance Mobile App is one that is easy to navigate and
                    use. Important features are easily accessible and seamless
                    in usage.
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
                  <p className="sm:text-[1.2rem] text-[.9rem] text-grey-100">
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
