/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from "react";
import Navbar from "../../components/Navbar";
import GlobalStyle from "../../styles/global";
import {
  Container,
  Content,
  ImageFirst,
  Subtitle,
  Text,
  Title,
} from "./styles";

export default function AboutMe(): ReactElement {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <ImageFirst src="/images/hello.png" />
        <div>
          <Text>
            <Title>About me</Title>
            <Subtitle>
              I am a student of information systems at Unifafibe University. And
              I graduated in systems development technician at Etec Bebedouro.
              I'm currently working as a junior developer at ImobPower company,
              where I use JavaScript, ReactJS, NextJS and consume the Rest and
              RestFull APIs.
            </Subtitle>
          </Text>

          <Text>
            <Title>My objective</Title>
            <Subtitle>
              My goal is to become an iconic figure in the world of technology,
              where I can develop a technology that can contribute positively to
              all society and in any area, and that everyone can enjoy my
              creation.
            </Subtitle>
          </Text>
        </div>
      </Content>
    </Container>
  );
}
