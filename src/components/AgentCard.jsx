const AgentCard = ({ agent }) => {
  return (
    <div className="text-center max-w-[350px]">
      <img src={agent.image.url} alt="" />
      <p className="text-[24px] font-medium pt-[26px]">{agent.name}</p>
      <p className="text-[18px] text-para02">{agent.email}</p>
      {/* Other agent information */}
    </div>
  );
};

export default AgentCard;
