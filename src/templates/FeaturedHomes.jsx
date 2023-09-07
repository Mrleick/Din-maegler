import HomeCard from "../components/HomeCard";
import { Link } from "react-router-dom";
import GetHomes from "../hooks/GetHomes";

const FeaturedHomes = () => {
  const HomesData = GetHomes();
  console.log("HomesData:", HomesData);

  return (
    <div className="bg-second flex flex-col pb-[120px]">
      <div className="pt-[120px] text-center max-w-[645px] mx-auto">
        <h2 className="text-[38px] text-heading1 font-bold">
          Udvalgte Boliger
        </h2>
        <p className="mt-[16px]">
          There are many variations of passages of Lorem Ipsum available but the
          this in majority have suffered alteration in some
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[30px] mt-[60px] max-w-[1110px] self-center">
        {HomesData.map((home, index) =>
          index < 4 ? <HomeCard key={home.id} data={home} /> : null
        )}
      </div>
      <button className="bg-primary max-w-[178px] mt-[52px] rounded-sm h-[62px] text-white self-center">
        <Link className="text-[18px] px-[32px]" to="Properties">
          Se alle boliger
        </Link>
      </button>
    </div>
  );
};
export default FeaturedHomes;
