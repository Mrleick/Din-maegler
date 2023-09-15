import Banner from "../components/Banner";
import GetAgents from "../hooks/GetAgents";
import AgentCard from "../components/AgentCard";

const Agents = () => {
  const AgentsData = GetAgents();
  return (
    <>
      <div>
        <Banner title="Medarbejdere i Roskilde" />
        <div className="grid grid-cols-3 max-w-[1110px] gap-y-[48px] mx-auto mt-[120px] mb-[180px]">
          {AgentsData.map((agent, index) =>
            index < 6 ? <AgentCard agent={agent} key={index} /> : null
          )}
        </div>
      </div>
    </>
  );
};

export default Agents;
