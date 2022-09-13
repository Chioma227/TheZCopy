import React, { useState } from "react";
import data from "./data";
import questionMessage from "../../images/message-question.png";
import Questions from "./Questions";
import imageOne from "../../images/Rectangle 13.png";
import imageTwo from "../../images/Rectangle 2045.png";

const FAQ = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <>
      <article className="lg:px-[5rem] md:px-[2.5rem] sm:px-14 px-6 mt-[30px] md:mb-[9rem] mb-[5rem]">
        <div className="md:mb-6 mb-4">
          <div className="relative lg:w-[65%] md:w-[445px] sm:w-[500px] w-[280px]">
            <div className="absolute left-0 lg:w-[1.3rem] md:w-[1rem] sm:w-[.9rem] w-[.7rem]">
              <img src={imageOne} alt="" />
            </div>
            <div className="absolute right-0 lg:w-[1.3rem] md:w-[1rem] sm:w-[.9rem] w-[.7rem]">
              <img src={imageTwo} alt="" />
            </div>
            <h2 className="lg:text-[3.2rem] md:text-[1.8rem] sm:text-[2.1rem] text-[1.2rem] text-center  font-bold text-darkblue-100 md:mb-3 mb-2 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="lg:text-[1.4rem] md:text-xl sm:text-[1.2rem] text-[.9rem]  lg:w-[65%] text-grey-100">
            Our FAQs comprises of different questions that you might have,
            alongside their answers.{" "}
          </p>
        </div>
        <main className="lg:flex md:flex block items-center justify-center gap-20">
          <section className="transition-all">
            {questions.map((question) => {
              return <Questions key={question.id} {...question} />;
            })}
          </section>

          <section className="">
            <div className="bg-darkblue-100 lg:w-[25rem] md:w-[20rem] md:px-5 h-fit md:py-12 py-9 text-center text-white flex-1">
              <div className=" w-16 mx-auto mb-4">
                <img src={questionMessage} alt="question message icon" />
              </div>
              <h3 className="font-bold text-xl mb-2 tracking-wide text-gray-100">
                You can't find your Question?
              </h3>
              <p className="mb-5 w-[80%] mx-auto lg:text-base md:text-base sm:text-base text-sm text-gray-300">
                Contact us and we will respond to you shortly.
              </p>
              <a
                href="mailto:ekenechristian62@gmail.com"
                className="bg-white rounded-md font-bold text-gray-800 px-6 py-3 hover:no-underline hover:text-gray-900"
              >
                <i class="fa fa-envelope" aria-hidden="true" />
                Send a Direct Mail
              </a>
              <p className="mb-6 mt-6 text-gray-300">Or Call</p>
              <a
                href="tel:+234 7087645321"
                className=" bg-transparent border-2 text-white rounded-md  px-9 font-bold  py-3 hover:no-underline hover:text-gray-900"
              >
                +234 7087645321
              </a>
            </div>
          </section>
        </main>
      </article>
    </>
  );
};

export default FAQ;
