import React from "react";
import styled from "styled-components";
import P from "../components/Paragraph";

const UdvalgteDiv = styled.div`
  margin: 0 auto;
  background-color: #f8f8fb;
`;

const UdvalgteText = styled.div`
  width: 646px;
  margin: 0 auto;
  text-align: center;
`;

const UdvalgteHeader = styled.h1`
  text-align: center;
  padding-top: 100px;
  font-size: 38px;
  margin-bottom: 30px;
`;

const UdvalgteCards = styled.div`
  width: 1110px;
  margin: 70px auto 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 30px;
`;

const Udvalgte = ({ data }) => {
  return (
    <UdvalgteDiv>
      <UdvalgteText>
        <UdvalgteHeader>Udvalgte Boliger</UdvalgteHeader>
        <P
          size="18px"
          text="There are many variations of passages of Lorem Ipsum available but the this in majority have suffered alteration in some"
        />
      </UdvalgteText>
      <UdvalgteCards>
        {data.map(home => (
          <div key={home.id}>
            {<P text={home.adress1}></P>}
          </div>
        ))}
      </UdvalgteCards>
    </UdvalgteDiv>
  );
};

export default Udvalgte;
