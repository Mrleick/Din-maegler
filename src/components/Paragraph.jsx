import styled from "styled-components";

const StyledParagraph = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textalign}; 
`;

const Paragraph = (props) => {
  return (
    <StyledParagraph
      color={props.color}
      size={props.size}
      weight={props.weight}
      height={props.height}
      margin={props.margin}
      text={props.text}
      text-align={props.textalign}
      
    >
      {props.text}{" "}
    </StyledParagraph>
  );
};

export default Paragraph;
