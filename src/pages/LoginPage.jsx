import Banner from "../components/Banner";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <Banner title="Log ind" />
      <div className="flex flex-col items-center max-w-[920px] my-[120px] shadow-xl border border-shape01 rounded py-[72px] mx-auto">
        <h3 className="text-[32px] font-medium">Log ind på din konto</h3>

        <form className="w-[100%] max-w-[540px] flex flex-col">
          <p className="mb-[8px]">Email</p>
          <input
            className="border border-shape01 pl-[10px] py-[10px] mb-[24px] rounded"
            label="Email"
            placeholder="Email"
          />
          <p className="mb-[8px]">Password</p>
          <input
            className="border border-shape01 pl-[10px] py-[10px] mb-[24px] rounded"
            label="Password"
            type="password"
            placeholder="Password"
          />

          <Button className="buttonStyle cursor-pointer" type="submit">
            Log ind
          </Button>
          <p className="mb-[16px] mt-[40px]">Log ind med</p>
          <div className="flex gap-[15px]">
            <Link className="w-[100%] max-w-[170px] py-[15px] font-medium text-white text-center bg-[#DD4B39]">
              Google
            </Link>
            <Link className="w-[100%] max-w-[170px] py-[15px] font-medium text-white text-center bg-[#3B5999]">
              Facebook
            </Link>
            <Link className="w-[100%] max-w-[170px] py-[15px] font-medium text-white text-center bg-[#162A41]">
              Twitter
            </Link>
          </div>
          <p className="mt-[40px] text-center">Har du ikke en konto?</p>
        </form>
        <Link to="/Register" className="text-[blue]">
          Opret bruger.
        </Link>
      </div>
    </>
  );
};

export default LoginPage;
