import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="bg-[#EEF7FF] grid grid-cols-1 grid-rows-1">
        <div className="bg-primary w-[432px] h-[90px] mt-[230px] mx-auto col-start-1 col-end-2 row-start-1 row-end-font-2 z-10"></div>
        <div className="max-h-[200px] mt-[120px] mx-auto col-start-1 row-start-1 row-end-2 z-20">
          <h2 className="text-white text-[200px] leading-[200px] bold text-center strokeme ">
            Hov!
          </h2>
        </div>
        <div className="flex flex-col items-center text-center h-[116px] mt-[360px] mx-auto col-start-1 col-end-2 row-start-1 row-end-font-2">
          <h2 className="text-[30px] font-bold z-20">
            Du er havnet på en side som ikke findes!
          </h2>
          <p className="text-[18px] w-[458px] mt-[16px]">
            Det er vi kede af! Vi har sendt en besked af sted til vores
            internetbureau, og bedt dem se på fejlen.
          </p>
        </div>
        <Link to="/" className="bg-primary mt-[56px] mb-[136px] mx-auto py-[16px] text-white text-[18px] font-bold text-center w-[215px] h-[62px] col-start-1 col-end-2 row-start-2 row-end-3 z-10">
          Tilbage til forsiden
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
