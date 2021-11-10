import React, { ReactElement } from "react";
import Navbar from "../../components/Navbar";
import GlobalStyle from "../../styles/global";
import { Container, Content, ImageFirst, Text } from "./styles";

export default function HomePage(): ReactElement {
    return (
      <Container>
        <GlobalStyle />
        <Content>
          <ImageFirst src="/images/dev.png" />
          <div>
            <Text>
              <text>Hi,</text> <br /> my names is
            </Text>
            <h1>Caio Henrique Rodrigues</h1>
            <Text>
              I am front-end and back-end <br />
              developer
            </Text>
          </div>
        </Content>
      </Container>
    );
}