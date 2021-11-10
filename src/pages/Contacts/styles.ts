import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  color: ${colors.white};
  margin-top: 100px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    margin-right: 50px;
    margin-left: 100px;

    margin-top: 120px;
  }

  .bounce-left {
    -webkit-animation: bounce-left 0.8s both;
    animation: bounce-left 0.8s both;
  }
`;

export const ImageFirst = styled.img`
  margin-top: 100px;

  width: 600px;
  height: 400px;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.text`
  font-size: 22px;
  font-weight: bold;
`;

export const Subtitle = styled.text`
  display: flex;
  flex-direction: column;
  width: 500px;
  background: ${colors.white};
  color: ${colors.text};
  font-size: 16px;
  padding: 8px 16px;
  margin-bottom: 30px;
  border-radius: 20px;
`;

export const DivImage = styled.div`
  display: flex;
  flex-direction: column;
`;
