import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  color: ${colors.white};
  margin-top: 100px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    text-align: right;
    margin-right: 150px;
    margin-top: 120px;
  }
`;

export const ImageFirst = styled.img`
  margin: 100px 0 0 100px;

  height: 350px;
`;

export const Text = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  text-align: right;
`;

export const Title = styled.text`
  font-size: 26px;
  font-weight: bold;
  margin-top: 40px;
`;

export const Subtitle = styled.text`
  margin-top: 12px;
  margin-bottom: 12px;

  font-size: 22px;
`;