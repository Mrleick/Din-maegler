import Button from "../components/Button";
import styled from "styled-components";
import HomeCard from "../components/HomeCard";
import GetHomes from "../hooks/Gethomes";

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
  const HomesData = GetHomes();
  console.log("HomesData:", HomesData);

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
        {HomesData.map((home) => (
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
