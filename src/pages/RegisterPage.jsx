import React from "react";
import { useForm } from "react-hook-form";
import Banner from "../components/Banner";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <Banner title="Opret bruger" />
      <div className="max-w-[920px] shadow-xl border border-shape01 rounded mx-auto py-[72px] my-[120px]">
        <h2 className="text-[30px] font-medium text-heading2 text-center pb-[40px]">
          Opret bruger hos Din Mægler
        </h2>
        <form
          className="flex flex-col max-w-[540px] mx-auto mb-[8px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="mb-[8px]" htmlFor="name">
            Fulde navn
          </label>
          <input
            className="border border-shape01 py-[15px] pl-[15px] mb-[24px] rounded"
            placeholder="Fulde navn"
            {...register("navn")}
          />

          <label className="mb-[8px]" htmlFor="email">
            Email adresse
          </label>
          <input
            className="border border-shape01 py-[15px] pl-[15px] mb-[24px] rounded"
            placeholder="Email adresse"
            type="email"
            {...register("email")}
          />

          <label className="mb-[8px]" htmlFor="password">
            Password
          </label>
          <input
            className="border border-shape01 py-[15px] pl-[15px] mb-[24px] rounded"
            placeholder="Password"
            type="password"
            {...register("password")}
          />

          <label className="mb-[8px]" htmlFor="password">
            Bekræft password
          </label>
          <input
            className="border border-shape01 py-[15px] pl-[15px] mb-[24px] rounded"
            placeholder="Bekræft kodeord"
            type="password"
            {...register("bekræft kodeord")}
          />

          <button className="bg-primary text-white py-[15px]" type="submit">
            Opret bruger
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;
