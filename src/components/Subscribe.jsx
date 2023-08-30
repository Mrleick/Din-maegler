import styled from "styled-components";
import SubBg from "../assets/Subscribe.png";

const SubscribeDiv = styled.div`
  background-image: url(${SubBg});
  height: 284px;
  max-width: 1920px;
  color: white;
  background-size: cover; /* or "contain" depending on what you want */
  background-position: center center;
  background-repeat: no-repeat;
`;

const SubscribeMask = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(51, 72, 92, 0.9);
  display: grid;
  align-items: center;
  gap: 52px;
`;

const SubscribeInnerDiv = styled.div`
  max-width: 1110px;
  display: flex;
  margin: auto;
  gap: 80px;
  align-items: center;
`;

const SubscribeText = styled.h2`
  color: white;
  font-size: 30px;
  font-weight: 500;
  width: 490px;
`;

const SubscribeInput = styled.input`
  width: 540px;
  height: 74px;
`;

const Subscribe = () => {
  return (
    <SubscribeDiv>
      <SubscribeMask>
        <SubscribeInnerDiv>
          <SubscribeText>
            Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
          </SubscribeText>
          <SubscribeInput
            id="email"
            autoomplete="email"
            placeholder="Indtast din email adresse"
          />
        </SubscribeInnerDiv>
      </SubscribeMask>
    </SubscribeDiv>
  );
};

export default Subscribe;
