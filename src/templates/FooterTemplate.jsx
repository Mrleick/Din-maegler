import Footer from "../components/Footer";
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faPaperPlane,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const FooterTemplate = () => {
  return (
    <div className="h-{100px} bg-gradient-to-b from-black to-white">
      <div className="w-[825px] mx-auto pt-[80px]">
        <div className="mb-[60px] max-w-[728px]">
          <img src={Logo} alt="Din mægler logo" />
          <p className="w-[728px] mt-[24px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
        </div>
        <div className="flex flex-col  bg-white max-w-[444px] mb-[80px] ">
          <div className="flex flex-col mt-[50px] ml-[50px] gap-[32px]">
            <div className="flex gap-[12px] max-h-[60px] max-w-[333px]">
              <div className="flex text-white w-[60px] h-[60px] bg-primary rounded-[50%] items-center justify-center">
                <FontAwesomeIcon className="fa-xl" icon={faPhone} />
              </div>
              <div>
                <p className="text-[12px]">Ring til os</p>
                <p className="text-[18px] font-medium">+45 7070 4000</p>
              </div>
            </div>
            <div className="flex gap-[12px] max-h-[60px] max-w-[333px]">
              <div className="flex text-white w-[60px] h-[60px] bg-primary rounded-[50%] items-center justify-center">
                <FontAwesomeIcon className="fa-xl" icon={faPaperPlane} />
              </div>
              <div>
                <p className="text-[12px]">Send en mail</p>
                <p className="text-[18px] font-medium">4000@dinmaegler.com</p>
              </div>
            </div>
            <div className="flex gap-[12px] max-h-[60px] max-w-[340px]">
              <div className="flex text-white w-[60px] h-[60px] bg-primary rounded-[50%] items-center justify-center">
                <FontAwesomeIcon className="fa-xl" icon={faLocationDot} />
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FooterTemplate;
