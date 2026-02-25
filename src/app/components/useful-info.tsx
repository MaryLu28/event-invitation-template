import { useState } from "react";

import Markdown from "markdown-to-jsx";
import { Modal } from "react-responsive-modal";
import styled from "styled-components";

import { colors } from "../shared/colors";
import { Button, Container, Title } from "../shared/common-components";

import dataJson from "../data.json";
import { tablet } from "../shared/breakpoints";

const data = dataJson as Data;

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  font-size: 16px;
  text-align: center;
  color: ${colors.primary600};
  margin-bottom: 20px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const InfoBox = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;

  @media (${tablet}) {
    width: 50%;
    min-width: 200px;
  }
`;

const InfoTitle = styled(Title)`
  font-size: 18px;
  margin-bottom: 10px;
`;

const InfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-position: inside;
`;

const InfoItem = styled.li`
  padding-left: 30px;
  color: ${colors.primary700};
  font-size: 14px;
  margin-bottom: 15px;
  min-width: calc(50% - 10px);
  margin-right: 10px;

  &::marker {
    color: ${colors.primary700};
  }
`;

const InfoLink = styled.a`
  text-decoration: underline;
  font-weight: 500;
  margin-left: 5px;
`;

export default function UsefulInfo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container $backgroundColor={colors.primary200}>
      <Content>
        <Title>{data.usefulInfo.title}</Title>
        <Text>
          <Markdown>{data.usefulInfo.description}</Markdown>
        </Text>
        <Button onClick={handleShow}>Ver detalles</Button>
        <Modal
          open={show}
          onClose={handleClose}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal customModalLarge",
          }}
        >
          <ModalContent>
            {data.usefulInfo.details.map((info, index) => (
              <InfoBox key={index}>
                <InfoTitle>{info.title}</InfoTitle>
                <InfoList>
                  {info.list.map((item, indexList) => (
                    <InfoItem key={indexList}>
                      <Markdown>{item.text}</Markdown>

                      {item.link && (
                        <InfoLink href={item.link} target="_blank">
                          {item.linkText ? item.linkText : "más información"}
                        </InfoLink>
                      )}
                    </InfoItem>
                  ))}
                </InfoList>
              </InfoBox>
            ))}
          </ModalContent>
        </Modal>
      </Content>
    </Container>
  );
}
