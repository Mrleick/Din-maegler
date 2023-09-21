import React from "react";
import { Link } from "react-router-dom";
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
      <div className="flex max-w-[1134px] mx-auto gap-[40px] mb-[42px]">
        {AgentsData.map((agent, index) =>
          index < 3 ? <AgentCard agent={agent} key={index} /> : null
        )}
      </div>
      <Link
        to="Agents"
        className="flex justify-center py-[16px] w-[194px] bg-primary font-medium text-white rounded-sm mx-auto "
      >
        Se alle mæglere
      </Link>
    </div>
  );
};

export default FeaturedAgents;
