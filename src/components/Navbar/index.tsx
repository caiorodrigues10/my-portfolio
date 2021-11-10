import React, {ReactElement} from "react";
import {Container, Logo } from './styles';
import {AiOutlineRight} from "react-icons/ai";
import { Avatar, Button } from "@mui/material";
import Image from "next/image";

export default function Navbar(): ReactElement{
    return (
      <Container>
        <Avatar
          src="/images/avatar.jpeg"
          alt="Me"
        />
        <ul>
          <li>
            <Button href="#text-buttons" disableElevation>
              Experiences
            </Button>
          </li>
          <li>
            <Button href="#text-buttons">Social networks</Button>
          </li>
          <li>
            <Button href="#text-buttons">Contacts</Button>
          </li>
          <li>
            <Button href="#text-buttons">About me</Button>
          </li>
          <li>
            <Button href="#text-buttons">Projects</Button>
          </li>
        </ul>
      </Container>
    );
}