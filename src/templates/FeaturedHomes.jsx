import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../components/Button";
import styled from "styled-components";
import HomeCard from "../components/HomeCard";

const UdvalgteDiv = styled.div`
  margin: 0 auto;
  background-color: #f8f8fb;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UdvalgteText = styled.div`
  width: 646px;
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
  margin: 70px auto 58px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 30px;
`;

const FeaturedHomes = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      try {
        const response = await axios.get(
          "https://dinmaegler.onrender.com/homes?_limit=4"
        );
        if (response.status === 200) {
          setHomes(response.data);
        } else {
          throw new Error(response.statusText);
        }
      } catch (error) {
        console.error("Error fetching homes:", error);
      }
    };

    fetchHomes();
  }, []);

  return (
    <UdvalgteDiv>
      <UdvalgteText>
        <UdvalgteHeader>Udvalgte Boliger</UdvalgteHeader>
        <p>
          There are many variations of passages of Lorem Ipsum available but the
          this in majority have suffered alteration in some
        </p>
      </UdvalgteText>
      <UdvalgteCards>
        {homes.map((home) => (
          <HomeCard key={home.id} data={home} />
        ))}
      </UdvalgteCards>
      <Button
        width="178px"
        height="62px"
        color="white"
        text="Se alle boliger"
      ></Button>
    </UdvalgteDiv>
  );
};

export default FeaturedHomes;
