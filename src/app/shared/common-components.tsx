import styled, { css } from "styled-components";
import { colors } from "./colors";
import React from "react";

export const Title = styled.h4<{ color?: string }>`
  font-size: 28px;
  margin-bottom: 16px;
  color: ${(props) => props.color ?? colors.primary700};
  text-align: center;
  font-weight: 400;
`;

export const Container = styled.section<{
  $backgroundColor: string;
  $padding?: string;
}>`
  width: 100%;
  background-color: ${(props) => props.$backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.$padding ?? "60px 20px"};
`;

const buttonStyle = css`
  font-size: 16px;
  padding: 10px;
  color: ${colors.primary100};
  background-color: ${colors.primary700};
  margin: 20px auto 0;
  text-align: center;
  min-width: 120px;
  z-index: 1;
`;

export const ButtonLink = styled.a<{
  $theme?:
    | "primaryDark"
    | "secondaryLight"
    | "secondaryDark"
    | "tertiaryLight"
    | "tertiaryDark";
}>`
  ${buttonStyle}
  ${(props) =>
    props.theme === "primaryDark" &&
    `color: ${colors.primary700};
    background-color: ${colors.primary100};`}
  ${(props) =>
    props.theme === "secondaryLight" &&
    `color: ${colors.secondary100};
    background-color: ${colors.secondary600};`}
  ${(props) =>
    props.theme === "secondaryDark" &&
    `color: ${colors.secondary600};
    background-color: ${colors.secondary200};`}
  ${(props) =>
    props.theme === "tertiaryLight" &&
    `color: ${colors.tertiary100};
    background-color: ${colors.tertiary500};`}
  ${(props) =>
    props.theme === "tertiaryDark" &&
    `color: ${colors.tertiary700};
    background-color: ${colors.tertiary200};`}
`;

export const Button = styled.button<{
  $theme?:
    | "primaryDark"
    | "secondaryLight"
    | "secondaryDark"
    | "tertiaryLight"
    | "tertiaryDark";
}>`
  ${buttonStyle}
  ${(props) =>
    props.theme === "primaryDark" &&
    `color: ${colors.primary700};
    background-color: ${colors.primary100};`}
  ${(props) =>
    props.theme === "secondaryLight" &&
    `color: ${colors.secondary100};
    background-color: ${colors.secondary700};`}
  ${(props) =>
    props.theme === "secondaryDark" &&
    `color: ${colors.secondary600};
    background-color: ${colors.secondary200};`}
  ${(props) =>
    props.theme === "tertiaryLight" &&
    `color: ${colors.tertiary100};
    background-color: ${colors.tertiary500};`}
  ${(props) =>
    props.theme === "tertiaryDark" &&
    `color: ${colors.tertiary700};
    background-color: ${colors.tertiary200};`}
`;
