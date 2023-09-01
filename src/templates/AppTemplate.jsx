import { FaGooglePlay, FaApple } from "react-icons/fa";
import Iphone1 from "../assets/iphone1.png";
import Iphone2 from "../assets/iphone2.png";

const AppTemplate = () => {
  return (
    <div className="bg-primary mt-[114px] flex items-center justify-center">
      <div>
        <h2 className="text-[38px] text-white max-w-[535px] font-bold">
          Hold dig opdateret på salgsprocessen
        </h2>
        <p className="text-white max-w-[634px]">
          Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den
          ansvarlige mægler eller butik med vores app. Her kan du også se
          statistik på interessen for din bolig i alle vores salgskanaler.
        </p>
        <div className="flex">
          <button className="flex bg-white h-[62px] w-[189px] rounded-sm mt-[24px] mr-[16px] items-center justify-center text-[18px] font-medium">
            <FaGooglePlay className="w-[24px] h-[24px] mr-[4px]" />
            Google Play
          </button>
          <button className="flex bg-primary text-white h-[62px] w-[189px] rounded-sm mt-[24px] border items-center justify-center text-[18px] font-medium">
            <FaApple className="w-[24px] h-[24px] mr-[4px]" />
            Apple Store
          </button>
        </div>
      </div>

      <div className="flex w-[436px]  pt-[87px]">
        <div className="relative max-h-[425px]">
          <img className="ml-[165px]" src={Iphone2} alt="Iphone" />
        </div>
        <div className="absolute">
          <img src={Iphone1} alt="Iphone" />
        </div>
      </div>
    </div>
  );
};

export default AppTemplate;
