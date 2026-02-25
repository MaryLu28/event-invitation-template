import Markdown from "markdown-to-jsx";
import styled from "styled-components";

import { ButtonLink, Container, Title } from "../shared/common-components";
import { colors } from "../shared/colors";

import iconCalendar from "../../../public/img/icono-calendario.svg";

import dataJson from "../data.json";

const rsvp = dataJson.rsvp as RSVP;

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
  z-index: 0;
`;

const Text = styled.p`
  font-size: 18px;
  text-align: center;
  color: ${colors.primary600};
  margin-bottom: 20px;
`;

const SmallText = styled(Text)`
  font-size: 14px;
`;

export default function RSVP() {
  return (
    <Container $backgroundColor={colors.primary200} $padding="80px 20px 60px">
      <Content>
        <Title>RSVP</Title>
        <Text>
          <Markdown>{rsvp.message}</Markdown>
        </Text>
        {rsvp.note && (
          <SmallText>
            <Markdown>{rsvp.note}</Markdown>
          </SmallText>
        )}
        <ButtonLink href={rsvp.link} target="_blank">
          Confirmar asistencia
        </ButtonLink>
        <Icon src={iconCalendar.src} alt="Icono calendario" />
        <Text>¡Agenda la fecha en tu calendario!</Text>
        <ButtonLink href={rsvp.calendarLink} target="_blank">
          Agendar evento
        </ButtonLink>
      </Content>
    </Container>
  );
}
