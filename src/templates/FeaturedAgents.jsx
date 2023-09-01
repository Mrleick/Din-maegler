import React from "react";
import GetAgents from "../hooks/GetAgents";
import AgentCard from "../components/AgentCard";

const FeaturedAgents = () => {
  const AgentsData = GetAgents();
  console.log("AgentsData", AgentsData);

  return (
    <div className="max-w-[1110px] mx-auto">
      <div className="max-w-[640px] mx-auto mt-[126px] mb-[60px] text-center">
        <h2 className="text-[34px] text-center font-bold mb-[16px]">
          Mød vores engagerede medarbejdere
        </h2>
        <p className="text-[18px] max-w-[550px]">
          Din Mægler er garant for altid veluddannet assistance i dit boligsalg.
          Kontakt en af vores medarbejdere.
        </p>
      </div>
      <div className="flex max-w-[1134px] mx-auto gap-[40px]">
        {AgentsData.map((agent, index) =>
          index < 3 ? <AgentCard agent={agent} key={index} /> : null
        )}
      </div>
      <button className="w-[194px] h-[62px] bg-primary text-white block mx-auto mt-[42px] rounded-sm ">
        Se alle mæglere
      </button>
    </div>
  );
};

export default FeaturedAgents;
