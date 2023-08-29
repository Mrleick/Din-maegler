import styled from "styled-components";
import pind from "../assets/pind.png";
import Button from "../components/Button";

const SearchBlock = styled.div`
  width: 857px;
  height: 138px;
  margin: 40px auto;
  display: grid;
  grid-template-rows: 30px 4px 28px 48px;
`;

const SearchPindElement = styled.img`
  width: 45px;
`;

const SearchInputElement = styled.input`
  width: 700px;
  height: 48px;
  font-size: 18px;
  margin-top: 7px;
  margin-right: 10px;
  border-radius: 2px;
  border-color: #d3dee8;
  border: 1px solid;
  padding-left: 10px;
`;

const SearchFieldElement = styled.div`
  margin-top: 20px;
`;

function SearchForm() {
  return (
    <SearchBlock>
      <p>Søg blandt 158 boliger til salg i 74 butikker</p>
      <SearchPindElement src={pind} alt="linje" />

      <SearchFieldElement>
        <p>Hvad skal din næste bolig indeholde</p>
        <SearchInputElement placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende." />
        <Button width="120px" height="48px" color="white" text="Søg"></Button>
      </SearchFieldElement>
    </SearchBlock>
  );
}

export default SearchForm;
