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

import { FaWhatsapp } from "react-icons/fa";

export default function Contacts(): ReactElement {
  return (
    <Container>
      <GlobalStyle />
      <Content>
        <div>
          <h1>My contacts</h1>

          <Text >
            <FaWhatsapp size={28}/>
            <Subtitle>(17)98804-0531</Subtitle>
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
        </div>
        <ImageFirst src="/images/message.png" />
      </Content>
    </Container>
  );
}
