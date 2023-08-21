import styled from "styled-components";

const StyledParagraph = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  height: ${(props) => props.height};
`;

const Paragraph = (props) => {
  return (
    <StyledParagraph
      color={props.color}
      size={props.size}
      weight={props.weight}
      height={props.height}
    >
      {props.text}
    </StyledParagraph>
  );
};

export default Paragraph;
