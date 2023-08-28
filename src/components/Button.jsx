import styled from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  background-color: #162a41;
  border-radius: 2px;
  border-color: #162a41;
  cursor: pointer;
`;

const Button = (props) => {
  return (
    <StyledButton
      width={props.width}
      height={props.height}
      border-radius={props.borderRadius}
      color={props.color}
    >
      {props.text}{" "}
    </StyledButton>
  );
};

export default Button;
