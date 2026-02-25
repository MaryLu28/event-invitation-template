import styled from "styled-components";
import { colors } from "../shared/colors";

import iconMusic from "../../../public/img/icono-canciones.svg";

import dataJson from "../data.json";
import { ButtonLink, Container, Title } from "../shared/common-components";

const music = dataJson.music as Music;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 240px;
  margin: -40px 0;
`;

const Text = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${colors.secondary100};
  margin-bottom: 20px;
`;

const ButtonsGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const PlaylistBtn = styled(ButtonLink)`
  margin: 10px;
`;

export default function Music() {
  return (
    <Container $backgroundColor={colors.secondary600} $padding="40px 20px 60px">
      <Content>
        <Icon src={iconMusic.src} alt="Icono calendario" />
        <Title color={colors.secondary200}>{music.title}</Title>
        <Text>{music.description}</Text>
        <ButtonsGroup>
          {music.youtube && (
            <PlaylistBtn
              href={music.youtube}
              target="_blank"
              theme="secondaryDark"
            >
              Youtube
            </PlaylistBtn>
          )}
          {music.spotify && (
            <PlaylistBtn
              href={music.spotify}
              target="_blank"
              theme="secondaryDark"
            >
              Spotify
            </PlaylistBtn>
          )}
        </ButtonsGroup>
      </Content>
    </Container>
  );
}
