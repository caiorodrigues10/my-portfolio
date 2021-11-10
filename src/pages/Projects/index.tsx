/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from "react";
import Navbar from "../../components/Navbar";
import GlobalStyle from "../../styles/global";
import {
  Container,
  Content,
  DivImage,
  ImageFirst,
  Subtitle,
  Text,
  Title,
} from "./styles";

export default function Projects(): ReactElement {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <div>
          <h1>My Projects</h1>

          <Text>
            <Title>NewXp</Title>
            <Subtitle>
              This is a pomodoro clock I created to keep me focused on my goals.
            </Subtitle>
          </Text>

          <Text>
            <Title>Plant Manager</Title>
            <Subtitle>
              It is a hybrid mobile app which makes you take better care of your
              plants, alerting and guiding the best times to be watered.
            </Subtitle>
          </Text>

          <Text>
            <Title>Be The Hero</Title>
            <Subtitle>
              It is a software aimed at helping NGOs, where we have a platform
              for application and desktop consuming the same API.
            </Subtitle>
          </Text>

          <Text>
            <Title>JK Schedule</Title>
            <Subtitle>
              It's an agenda for a beauty salon, with several functions and
              utilities
            </Subtitle>
          </Text>

          <Text>
            <Title>Brewery survey</Title>
            <Subtitle>
              is a system for listing the order according to which each supplier
              sells, simplifying the order
            </Subtitle>
          </Text>
        </div>
        <DivImage>
          <ImageFirst src="/images/screen.png" />
          <ImageFirst src="/images/phone.png" />
        </DivImage>
      </Content>
    </Container>
  );
}
