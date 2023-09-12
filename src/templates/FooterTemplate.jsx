import Footer from "../components/Footer";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaPhone, FaPaperPlane } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const FooterTemplate = () => {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-1">
        <div className="h-full col-span-full row-span-full">
          <div className="bg-second h-2/3"></div>
          <div className="h-1/3"></div>
        </div>

        <div className="h-full col-span-full row-span-full w-full max-w-[1110px] mx-auto mt-[80px]">
          <div className="mb-[60px] ">
            <img src={Logo} alt="Din mægler logo" />
            <p className="w-[728px] mt-[24px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words.
            </p>
          </div>

          {/*Kontakt START*/}
          <div className="flex mb-[80px] gap-[126px]">
            <div className="bg-white flex flex-col px-[50px] py-[50px] gap-[32px] w-[444px] rounded shadow-lg shadow-agentshadow">
              <div className="flex gap-[12px] max-h-[60px] max-w-[333px]">
                <div className="flex text-white w-[60px] h-[60px] bg-primary rounded-[50%] items-center justify-center">
                  <FaPhone className="fa-xl" />
                </div>
                <div>
                  <p className="text-[12px]">Ring til os</p>
                  <p className="text-[18px] font-medium">+45 7070 4000</p>
                </div>
              </div>
              <div className="flex gap-[12px] max-h-[60px] max-w-[333px]">
                <div className="flex text-white w-[60px] h-[60px] bg-primary rounded-[50%] items-center justify-center">
                  <FaPaperPlane className="fa-xl" />
                </div>
                <div>
                  <p className="text-[12px]">Send en mail</p>
                  <p className="text-[18px] font-medium">4000@dinmaegler.com</p>
                </div>
              </div>
              <div className="flex gap-[12px] max-h-[60px] max-w-[340px]">
                <div className="flex text-white w-[60px] h-[60px] bg-primary rounded-[50%] items-center justify-center">
                  <FaLocationDot className="fa-xl" />
                </div>
                <div>
                  <p className="text-[12px]">Butik</p>
                  <p className="text-[18px] font-medium">
                    Stændertorvet 78, 4000 Roskilde
                  </p>
                </div>
              </div>
              <p className="text-[18px] text-para01 max-w-[229px] pb-[50px]">
                Din Mægler Roskilde, er din boligibutik i lokalområdet.
              </p>
            </div>
            <div>
              <h3 className="text-[24px] font-medium">Quick Links</h3>
              <nav className="flex flex-col leading-10 mt-[16px]">
                <Link className="text-[18px] text-para01" to="Properties">
                  Boliger til salg
                </Link>
                <Link className="text-[18px] text-para01" to="Properties">
                  Mæglere
                </Link>
                <Link className="text-[18px] text-para01" to="Properties">
                  Kontakt os
                </Link>
                <Link className="text-[18px] text-para01" to="Properties">
                  Log in / bliv bruger
                </Link>
              </nav>
              <div className="flex flex-col mt-[137px]">
                <p className="text-[16px] text-para02">Medlem af</p>
                <p className="text-[38px] text-para02 font-bold h-[51px]">
                  DMS
                </p>
                <p className="text-[16px] text-para02">
                  Dansk Mægler Sammenslutning
                </p>
              </div>
            </div>
          </div>
          {/* Kontakt END */}

          {/* FOOTER NAV START */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FooterTemplate;
