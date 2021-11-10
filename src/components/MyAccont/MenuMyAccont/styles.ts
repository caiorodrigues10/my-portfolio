import styled from 'styled-components';
import colors from '../../../styles/colors';

import {HiOutlineUserCircle} from "react-icons/hi";
import {BiBuildings, BiHistory} from "react-icons/bi";
import {IoMdKey, } from "react-icons/io";
import {IoLogOutOutline, } from "react-icons/io5";
import fonts from '../../../styles/fonts';

interface SelectedProps {
    selected: boolean[];
}

export const Container = styled.div<SelectedProps>`
  display: flex;
  flex-direction: column;
  width: 20%;
  height: 250px;
  background: #fff;
  box-shadow: -5px 7px 10px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  margin-left: 80px;
  font-weight: ${fonts.semibold};
  > a {
    height: 100%;
    display: flex;
    padding-left: 24px;

    border-bottom: 1px solid #bbbbbb;
    align-items: center;

    > text {
      font-size: 18px;
      margin-left: 8px;
    }
  }

  .user {
    border-radius: 20px 20px 0px 0px;
    background: ${(props) =>
      props.selected[0] ? fourth : "#fff"};
    color: ${(props) => (props.selected[0] ? "#fff" : "#333333")};
    transition: 0.2s;

    :hover {
      transition: 0.3s all;
      background: ${(props) =>
        props.selected[0]
          ? colors.hoverButton.hoverBlueButton
          : colors.hoverButton.hoverWhiteButton};
    }
  }

  .company {
    background: ${(props) =>
      props.selected[1] ? fourth : "#fff"};
    color: ${(props) => (props.selected[1] ? "#fff" : "#333333")};
    transition: 0.2s;

    :hover {
      transition: 0.3s all;
      background: ${(props) =>
        props.selected[1]
          ? colors.hoverButton.hoverBlueButton
          : colors.hoverButton.hoverWhiteButton};
    }
  }

  .pass {
    background: ${(props) =>
      props.selected[2] ? fourth : "#fff"};
    color: ${(props) => (props.selected[2] ? "#fff" : "#333333")};
    transition: 0.2s;

    :hover {
      transition: 0.3s all;
      background: ${(props) =>
        props.selected[2]
          ? colors.hoverButton.hoverBlueButton
          : colors.hoverButton.hoverWhiteButton};
    }
  }

  .history {
    background: ${(props) =>
      props.selected[3] ? fourth : "#fff"};
    color: ${(props) => (props.selected[3] ? "#fff" : "#333333")};
    transition: 0.2s;

    :hover {
      transition: 0.3s all;
      background: ${(props) =>
        props.selected[3]
          ? colors.hoverButton.hoverBlueButton
          : colors.hoverButton.hoverWhiteButton};
    }
  }

  .logOut {
    border-radius: 0px 0px 20px 20px;
    border: none;
    background: ${(props) => (props.selected[4] ? colors.third : "#fff")};
    color: ${(props) => (props.selected[4] ? "#fff" : "#333333")};
    transition: 0.2s;

    :hover {
      transition: 0.3s all;
      background: ${(props) =>
        props.selected[4]
          ? colors.hoverButton.hoverRedButton
          : colors.hoverButton.hoverWhiteButton};
    }
  }
`;

export const OutlineUserCircle = styled(HiOutlineUserCircle)<SelectedProps>`
    width: 30px;
    height: 30px;
    color: ${props => props.selected[0] ? '#fff' : '#333333'};
`

export const Buildings = styled(BiBuildings)<SelectedProps>`
    width: 30px;
    height: 30px;
    color: ${props => props.selected[1] ? '#fff' : '#333333'};
`

export const MdKey = styled(IoMdKey)<SelectedProps>`
    width: 30px;
    height: 30px;
    color: ${props => props.selected[2] ? '#fff' : '#333333'};
`

export const History = styled(BiHistory)<SelectedProps>`
    width: 30px;
    height: 30px;
    color: ${props => props.selected[3] ? '#fff' : '#333333'};
`

export const LogOutOutline = styled(IoLogOutOutline)<SelectedProps>`
    width: 30px;
    height: 30px;
    color: ${props => props.selected[4] ? '#fff' : '#333333'};
`