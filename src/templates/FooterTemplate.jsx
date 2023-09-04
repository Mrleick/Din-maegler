import Footer from "../components/Footer";
import Logo from "../assets/logo.png";

const FooterTemplate = () => {
  return (
    <div className="h-{100px} bg-white">
      <div className="w-[825px] mx-auto mt-[80px]">
        <img src={Logo} alt="Din mægler logo" />
        <p className="w-[728px] mt-[24px]">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words.
        </p>
        <div className="grid-rows-4">

          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FooterTemplate;
