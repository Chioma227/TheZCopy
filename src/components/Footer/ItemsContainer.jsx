import Item from "./Item";
import image from "../../images/Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { QUICKLINKS, SOCIALS} from "./Menu";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7 lg:px-20 px-6 py-16 w-fit m-auto">
      <div>
        <img src={image} alt="logo" className="w-20 lg:w-2/5 mb-3" />
        <p className="text-grey-100">
          TheZ Finance is a platform with an intuitive and elegant interface
          that offers faster and safer cryptocurrency transaction.
        </p>
        <div className="flex gap-4 mt-5">
          <a href="https://..." target="_blank" rel="noreferrer">
            <FaFacebookF className=" text-2xl" />
          </a>
          <a href="https://..." target="_blank" rel="noreferrer">
            <AiFillInstagram className="text-2xl "/>
          </a>
          <a href="https://..." target="_blank" rel="noreferrer">
            <IoLogoTwitter className="text-2xl"/>
          </a>
        </div>
      </div>
      <Item Links={QUICKLINKS} title="Quick Links" />
      <Item Links={SOCIALS} title="Socials" />
      <div>
        <h3 className="font-bold text-md mb-3">Newsletter</h3>
        <p className="mb-2 text-grey-100">
          Subscribe to our Newsletter and get our latest updates & news. Our
          Infrastructure is one that strives on changes so do stick around.
        </p>
        <div className="relative w-fit h-fit">
           <form>
           <input
              type="email"
              required
              placeholder="Enter Email Address"
              className="lg:w-[20rem] md:w-[26rem] sm:w-[25rem] w-[15rem] lg:py-[15px] md:py-[17px] sm:py-[15px] py-[10px] focus:outline-0 lg:placeholder:text-base md:placeholder:text-base sm:placeholder:text-md placeholder:text-xs indent-2 relative rounded-sm border-2 transition-all"
            />
            <button type="submit" className="absolute right-0 self-center bg-darkblue-100 text-white lg:text-base md:text-base sm:text-sm text-[13px] rounded-sm lg:px-2 lg:py-2 md:py-[0.4rem] sm:py-[0.3rem] py-[0.6rem] md:px-[0.4rem] sm:px-[0.5rem] px-[0.4rem] md:mr-2 mr-1 lg:top-[10px] md:top-[6px] sm:top-[13px]  top-[4px] transition-all"
            >
             Subscribe
              </button>
           </form>
          </div>
      </div>
    </div>
  );
};

export default ItemsContainer;
