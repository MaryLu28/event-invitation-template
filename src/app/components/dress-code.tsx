import styled from "styled-components";

import Modal from "react-responsive-modal";
import { useState } from "react";

import {
  Button,
  ButtonLink,
  Container,
  Title,
} from "../shared/common-components";
import { colors } from "../shared/colors";
import { mobile, tablet } from "../shared/breakpoints";

import iconDressCode from "../../../public/img/icono-dresscode.svg";
import imageBg from "../../../public/img/dress-code.png";

import data from "../data.json";

const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  align-items: center;
  color: ${colors.tertiary100};
`;

const Icon = styled.img`
  width: 240px;
  margin-bottom: -40px;
`;

const Text = styled.p`
  font-size: 20px;
  text-align: center;

  margin-bottom: 20px;
`;

const Tips = styled.p`
  font-size: 14px;
  margin-bottom: 6px;
  text-align: center;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-image: url(${imageBg.src});
  width: 230px;
  min-height: 200px;
  background-size: contain;
  background-position: center top;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  padding-top: 250px;

  @media (${mobile}) {
    width: 330px;
    padding-top: 0;
  }

  @media (min-width: 520px) {
    width: 430px;
  }

  @media (${tablet}) {
    width: 600px;
    height: 300px;
  }
`;

const ModalColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 45%;

  @media (${mobile}) {
    max-width: 20%;
  }

  @media (min-width: 520px) {
    max-width: 30%;
  }
`;

const ModalText = styled.p`
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center;
  color: ${colors.tertiary700};
  font-weight: 500;

  @media (${mobile}) {
    font-size: 14px;
    max-width: 450px;
  }

  @media (${tablet}) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export default function DressCode() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container $backgroundColor={colors.tertiary700} $padding="40px 20px 60px">
      <Content>
        <Icon src={iconDressCode.src} alt="Icono Dress Code" />
        <Title color={colors.tertiary200}>Código de Vestimenta</Title>
        <Text>{data.dressCode.description}</Text>
        {data.dressCode.tips && (
          <>
            {data.dressCode.tips.map((tip, index) => (
              <Tips key={index}>{tip}</Tips>
            ))}
          </>
        )}
        <Button theme="tertiaryDark" onClick={handleShow}>
          Más detalles
        </Button>
        <Modal
          open={show}
          onClose={handleClose}
          center
          classNames={{
            overlay: "customOverlay",
            modal: "customModal dressCodeModal",
          }}
        >
          <ModalContainer>
            <Title>Vestimenta formal, elegante</Title>
            <ModalWrapper>
              <ModalContent>
                <ModalColumn>
                  {data.dressCode.menDetails.map((detail, index) => (
                    <ModalText key={index}>{detail}</ModalText>
                  ))}
                </ModalColumn>
                <ModalColumn>
                  {data.dressCode.womenDetails.map((detail, index) => (
                    <ModalText key={index}>{detail}</ModalText>
                  ))}
                </ModalColumn>
              </ModalContent>
            </ModalWrapper>
            {data.dressCode.ModalFooterNote && (
              <ModalText>{data.dressCode.ModalFooterNote}</ModalText>
            )}
            {data.dressCode.examplesLink && (
              <ButtonLink target="_blank" href={data.dressCode.examplesLink}>
                Ver ejemplos
              </ButtonLink>
            )}
          </ModalContainer>
        </Modal>
      </Content>
    </Container>
  );
}
