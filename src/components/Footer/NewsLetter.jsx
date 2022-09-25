import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useState } from "react";
import { useEffect } from "react";

const NewsLetter = ({ message, status, onValidated }) => {
  const [errorMsg, setErroeMsg] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");


//   code to be executed when user submits form

  const handleSubmit = () => {
    setError(null);
    if (!email) {
      setError(true);
      return null;
    }
    const isFormValidated = onValidated({ EMAIL: email });

    return email && email.indexOf("@") > -1 && isFormValidated;
  };


//   action to occur when the user hits the enter button
  
  const handleKeyUpEvent = (event) => {
    setError(null);
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div className="relative w-fit h-fit">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={(e) => handleKeyUpEvent(e.target.value)}
            className="lg:w-[20rem] md:w-[26rem] sm:w-[25rem] w-[17rem] lg:py-[15px] md:py-[17px] sm:py-[15px] py-[10px] focus:outline-0 lg:placeholder:text-base md:placeholder:text-base sm:placeholder:text-md placeholder:text-xs indent-2 relative rounded-sm border-2 transition-all"
          />
          <button
            type="submit"
            className="absolute right-0 self-center bg-darkblue-100 text-white lg:text-base md:text-base sm:text-sm text-[13px] rounded-sm lg:px-2 lg:py-2 md:py-[0.4rem] sm:py-[0.3rem] py-[0.6rem] md:px-[0.4rem] sm:px-[0.5rem] px-[0.4rem] md:mr-2 mr-1 lg:top-[10px] md:top-[6px] sm:top-[13px]  top-[4px] transition-all"
            >
            Subscribe
          </button>
        </form>
        <div>
            <p>{error ? "Please enter a valid email" : ""}</p>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;