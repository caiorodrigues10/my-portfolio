import React, { ReactElement } from "react";
import Navbar from "../../components/Navbar";
import GlobalStyle from "../../styles/global";
import { Container, Content, ImageFirst, Subtitle, Text, Title } from "./styles";

export default function Expreriences(): ReactElement {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <ImageFirst src="/images/rocket.png" />
        <div>
          <h1>My experiences</h1>

          <Text>
            <Title>Front end developer React junior</Title>
            <Subtitle>ImobPower, 4 mounths</Subtitle>
          </Text>

          <Text>
            <Title>Admin assistant trainee</Title>
            <Subtitle>Capateria, 3 mounths </Subtitle>
          </Text>
        </div>
      </Content>
    </Container>
  );
}
