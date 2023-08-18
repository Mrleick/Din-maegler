import styled from "styled-components";

const StyledParagraph = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

const Paragraph = (props) => {
  return (
    <StyledParagraph color={props.color} size={props.size} weight={props.weight}>
      {props.text}
    </StyledParagraph>
  );
};

export default Paragraph;
