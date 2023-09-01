import { FaEnvelope } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const AgentCard = ({ agent }) => {
  return (
    <div className="text-center max-w-[350px] rounded border border-agentbordercolor shadow-lg shadow-agentshadow">
      <img src={agent.image.url} alt="" />
        <p className="text-[24px] font-medium pt-[26px]">{agent.name}</p>
        <p className="text-[18px] text-para02">{agent.email}</p>
        <div className="flex justify-center gap-[16px] pt-[16px] pb-[26px] ">
          <FaEnvelope className="block" />
          <FaLinkedinIn className="block" />
      </div>
    </div>
  );
};

export default AgentCard;
