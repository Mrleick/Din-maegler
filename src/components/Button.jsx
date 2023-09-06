const Button = ({ children }) => {
  return (
    <button className="text-white bg-primary h-[48px] rounded-[2px]">
      {children}
    </button>
  );
};

export default Button;
