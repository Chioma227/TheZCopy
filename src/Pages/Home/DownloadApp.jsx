import React from "react";
import phoneGroup from "../../images/Group 125.png";
import appleLogo from "../../images/Apple logo.png";
import playStoreLogo from "../../images/Google Play logo.png";

const DownloadApp = () => {
  return (
    <>
      <main className="w-full h-fit lg:px-20 md:px-10 mb-2">
        <section className="bg-darkblue-100 text-white lg:px-9 md:px-6 xs:px-5 py-12 lg:flex md:items-start sm:items-start sm:px-5  lg:flex-row md:flex md:flex-col-reverse sm:flex sm:flex-col-reverse flex flex-col-reverse  lg:items-center justify-between">
          <div className="lg:w-[69%] md:w-[79%] w-[100%]">
            <h2 className="font-bold lg:text-4xl md:text-2xl lg:mb-3 md:mb-2 sm:mb-2 xs:mb-2 leading-5 transition-all">
              Download TheZ Finance Mobile App to Easily sell your crypto
              currency
            </h2>
            <p className="lg:text-sm md:text-xs font-sans w-[89%] xs:text-[.8rem] transition-all">
              Download TheZ Finance Mobile App from Google Playstore and
              Appstore to enjoy seamless transaction of your favourite crypto
              currency quickly and with ease
            </p>
            <div className="flex lg:gap-5 md:gap-4 xs:gap-2 mt-10">
              <a
                href="http://..."
                target="_blank"
                rel="noreferrer"
                className="bg-gray-900 flex items-center lg:gap-5 sm:gap-3  md:gap-3 xs:gap-3 lg:px-3 md:px-2 sm:px-2 xs:px-2 rounded-md hover:no-underline hover:text-white py-1 border"
              >
                <div>
                  <img src={appleLogo} alt="" className="lg:w-[30px] md:w-[25px] sm:w-[20px] xs:w-[18px]" />
                </div>
                <div>
                  <p className="m-0 font-sans tracking-tighter text-sm">
                    Download on the
                  </p>
                  <p className="m-0 font-sans font-medium lg:text-xl md:text-lg transition-all">
                    App Store
                  </p>
                </div>
              </a>

              <a
                href="http://..."
                target="_blank"
                rel="noreferrer"
                className="bg-gray-900 flex items-center lg:gap-5 sm:gap-3  lg:px-3 md:px-2 sm:px-2 xs:px-2 rounded-md hover:no-underline hover:text-white border"
              >
                <div>
                  <img src={playStoreLogo} alt="" className="lg:w-[30px] md:w-[25px] sm:w-[20px] xs:w-[18px]" />
                </div>
                <div>
                  <p className="font-sans tracking-tighter lg:text-sm md:text-xs">
                    GET IT ON
                  </p>
                  <p className="font-sans font-medium lg:text-xl md:text-lg sm:text-sm">
                    Google Play
                  </p>
                </div>
              </a>
            </div>
          </div>
          <div className="lg:w-[30rem] md:w-[20rem] sm:w-[15rem] w-[13rem]">
            <img src={phoneGroup} alt="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default DownloadApp;
