import styled from "styled-components";

import { colors } from "../shared/colors";
import {
  ButtonLink,
  Container,
  FormattedText,
  Title,
} from "../shared/common-components";
import { tablet } from "../shared/breakpoints";

import data from "../data.json";

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  justify-content: center;
  flex-wrap: wrap;
`;

const Info = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.secondary600};

  @media (${tablet}) {
    width: 50%;
  }
`;

const Icon = styled.img`
  width: 200px;
`;

const DateInfo = styled.div`
  margin-bottom: 24px;
`;

const DateText = styled.p`
  font-size: 18px;
  text-align: center;

  font-weight: 500;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 6px;
  text-align: center;
`;

export default function CeremonyAndParty() {
  return (
    <Container $backgroundColor={colors.secondary100} $padding="20px 20px 60px">
      <Content>
        {data.events.map((event) => (
          <Info key={event.title}>
            <Icon src={`img/${event.icon}`} alt={`icono ${event.title}`} />
            {event.title && (
              <Title color={colors.secondary600}>{event.title}</Title>
            )}
            <DateInfo>
              <DateText>{event.dateStr}</DateText>
              <DateText>{event.timeStr}</DateText>
            </DateInfo>
            {event.description && (
              <Text style={{ marginBottom: 14 }}>
                <FormattedText text={event.description} />
              </Text>
            )}
            <Text>{event.address}</Text>
            <ButtonLink
              href={event.mapsLink}
              target="_blank"
              theme="secondaryLight"
            >
              Cómo llegar
            </ButtonLink>
          </Info>
        ))}
      </Content>
    </Container>
  );
}
