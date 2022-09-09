import React, { useState } from "react";
import data from "./data";
import questionMessage from "../../images/message-question.png";
import Questions from "./Questions";

const FAQ = () => {

  const [questions, setQuestions] = useState(data)

  return (
    <>
      <article className="lg:px-[5rem] md:px-8 sm:px-14 xs:px-9 mt-[30px] md:mb-[9rem] mb-[5rem]">
        <div className="mb-5">
          <h2 className="lg:text-[3.3rem] md:text-[2.5rem] xs:text-[1.1rem] font-bold text-darkblue-100 mb-3 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] text-grey-100">
            Our FAQs comprises of different questions that you might have,
            alongside their answers.{" "}
          </p>
        </div>
        <main className="lg:flex block items-center gap-20">
          <section className="flex-1 transition-all">
            {questions.map((question) => {
              return <Questions key={question.id} {...question}/>
            })}
          </section>

          <section className="flex-1">
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
