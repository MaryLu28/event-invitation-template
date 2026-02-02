import localFont from "next/font/local";
import styled from "styled-components";

import bgDesk from "../../../public/img/bg2.png";
import bgMobile from "../../../public/img/bgMobile.png";

import { desktop, mobile, tablet } from "../shared/breakpoints";
import { colors } from "../shared/colors";

import data from "../data.json";

const eyesomeScriptFont = localFont({
  src: "../../../public/fonts/Eyesome/Eyesome Script.otf",
});

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${bgMobile.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  @media (${desktop}) {
    background-image: url(${bgDesk.src});
  }
`;

const Title = styled.h2`
  font-family: ${eyesomeScriptFont.style.fontFamily};
  font-weight: normal;
  text-align: center;
  color: ${colors.primary600};
  font-size: 46px;

  &:first-of-type {
    margin-top: 20px;
  }
  &:last-of-type {
    margin-bottom: 20px;
  }

  @media (${mobile}) {
    font-size: 52px;
  }

  @media (${tablet}) {
    font-size: 72px;
  }
`;

const OverlappingContainer = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
`;

const CenteredText = styled.span`
  text-align: center;
  font-size: 300px;
  color: ${colors.secondary600};
  font-weight: 900;
  opacity: 0.7;
  line-height: 1;
`;

const OverlapText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  font-size: 150px;
  font-family: ${eyesomeScriptFont.style.fontFamily};
  color: ${colors.primary600};
`;

const ScrollDownArrow = styled.button`
  position: absolute;
  left: 50%;
  bottom: 70px;
  display: block;
  text-align: center;
  font-size: 20px;
  z-index: 100;
  text-decoration: none;
  text-shadow: 0;
  width: 20px;
  height: 20px;
  border-bottom: 2px solid ${colors.secondary700};
  border-right: 2px solid ${colors.secondary700};
  z-index: 9;
  left: 50%;
  -webkit-transform: translate(-50%, 0%) rotate(45deg);
  -moz-transform: translate(-50%, 0%) rotate(45deg);
  transform: translate(-50%, 0%) rotate(45deg);
  -webkit-animation: fade_move_down 4s ease-in-out infinite;
  -moz-animation: fade_move_down 4s ease-in-out infinite;
  animation: fade_move_down 4s ease-in-out infinite;

  @media (${tablet}) {
    bottom: 30px;
  }
`;

export default function Header({ onScroll }: { onScroll: () => any }) {
  return (
    <Container>
      {data.headerTitle && <Title>{data.headerTitle}</Title>}

      {data.headerCenteredText && (
        <OverlappingContainer>
          <CenteredText>{data.headerCenteredText.text}</CenteredText>
          <OverlapText>{data.headerCenteredText.subText}</OverlapText>
        </OverlappingContainer>
      )}
      {data.headerSubtitle && <Title>{data.headerSubtitle}</Title>}
      <ScrollDownArrow onClick={onScroll} />
    </Container>
  );
}
