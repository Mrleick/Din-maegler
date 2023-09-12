const Banner = ({ title }) => {
  return (
    <>
      <div className="h-48 bg-banner flex justify-center items-center bg-no-repeat mx-auto bg-maskbg bg-blend-multiply max-w-[1920px]">
        <h2 className="text-white font-bold text-6xl">{title}</h2>
      </div>
    </>
  );
};

export default Banner;
