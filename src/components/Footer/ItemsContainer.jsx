import Item from "./Item";
import image from "../../images/Logo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { QUICKLINKS, SOCIALS} from "./Menu";
import NewsLetter from "./NewsLetter";
import NewsLetterSubscribe from "./NewsLetterSubscribe";

const ItemsContainer = () => {
  const mailChimpUrl = '"https://gmail.us14.list-manage.com/subscribe/post?u=e11458d72bbe7764111bf613e&amp;id=9bb304d967&amp;f_id=00ddfae0f0'

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-7 lg:px-[7rem] px-6 py-[5rem] w-fit m-auto">
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
        <NewsLetterSubscribe/>
      </div>
    </div>
  );
};

export default ItemsContainer;
