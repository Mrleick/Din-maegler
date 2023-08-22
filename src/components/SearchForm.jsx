import React from "react";
import styled from "styled-components";
import pind from "../assets/pind.png";
import P from "./Paragraph";

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
  border-radius: 4px;
  border-color: grey;
  padding-left: 10px;
`;

const SearchFieldElement = styled.div`
  margin-top: 20px;
`;

const SearchButtonElement = styled.button`
  width: 120px;
  height: 51px;
  grid-row: 3/4;
  background-color: #162a41;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

function SearchForm() {
  return (
    <SearchBlock>
      <P
        color="#162a41"
        size="20px"
        weight="bold"
        text="Søg blandt 158 boliger til salg i 74 butikker"
      />
      <SearchPindElement src={pind} alt="linje" />

      <SearchFieldElement>
        <P
          color="#162a41"
          size="20px"
          height="28px"
          text="Hvad skal din næste bolig indeholde"
        />
        <SearchInputElement placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende." />
        <SearchButtonElement>Søg</SearchButtonElement>
      </SearchFieldElement>
    </SearchBlock>
  );
}

export default SearchForm;
