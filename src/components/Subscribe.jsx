import styled from "styled-components";
import SubBg from "../assets/Subscribe.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const SubscribeDiv = styled.div`
  background-image: url(${SubBg});
  height: 284px;
  max-width: 1920px;
  color: white;
  background-size: cover;
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

const Subscribe = () => {
  return (
    <SubscribeDiv>
      <SubscribeMask>
        <SubscribeInnerDiv>
          <SubscribeText>
            Tilmeld dig vores nyhedsbrev og hold dig opdateret på boligmarkedet
          </SubscribeText>
          <div className="flex relative">
            <input
              className="w-[520px] max-h-[78px] pl-[12px] py-[20px] rounded"
              id="email"
              autoComplete="email"
              placeholder="Indtast din email adresse "
            />
            <Link className="absolute self-center right-[22px]">
              <FaArrowRightLong
                className="text-[29px]"
                icon={FaArrowRightLong}
                style={{ color: "#000000" }}
              />
            </Link>
          </div>
        </SubscribeInnerDiv>
      </SubscribeMask>
    </SubscribeDiv>
  );
};

export default Subscribe;
