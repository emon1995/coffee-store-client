import logo from "../../assets/logo.png";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="layout justify-between bg-footer1 text-color py-20 px-48">
        <div>
          <img src={logo} alt="logo" />
          <h1 className="text-4xl text-[#331A15]">Espresso Emporium</h1>
          <p className="text-[#331A15]">
            Always ready to be your friend. Come & Contact with us to share your{" "}
            <br />
            memorable moments, to share with your best companion.
          </p>
          <div className="layout text-[#331A15]">
            <BsFacebook />
            <BsTwitter />
            <BsInstagram />
            <BsLinkedin />
          </div>
          <h2 className="text-2xl">Get in Touch</h2>
          <p className="layout">
            <BsFillTelephoneFill />
            +88 01533 333 333
          </p>
          <p className="layout">
            <MdEmail />
            +88 01533 333 333
          </p>
          <p className="layout">
            <MdLocationOn />
            +88 01533 333 333
          </p>
        </div>
        <div>
          <h1 className="text-2xl">Connect with Us</h1>
          <form>
            <input
              className="mb-4 bg-white p-2 w-full"
              type="text"
              name=""
              id=""
            />
            <br />
            <input
              className="mb-4 bg-white p-2 w-full"
              type="text"
              name=""
              id=""
            />
            <br />
            <textarea
              className="mb-4 bg-white p-2 w-full"
              name=""
              id=""
              cols="30"
              rows="3"
            ></textarea>
            <br />
            <button className="btn">Send Message</button>
          </form>
        </div>
      </div>
      <div className="bg-footer2 text-center py-4">
        <h1>Copyright Espresso Emporium ! All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
