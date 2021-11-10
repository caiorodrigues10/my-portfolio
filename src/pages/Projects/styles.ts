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
`;

export const ImageFirst = styled.img`
  margin-top: 100px;

  width: 600px;
  height: 400px;
`;

export const Text = styled.span`
  display: flex;
  flex-direction: column;
  width: 500px;
  background: ${colors.white};
  color: ${colors.text};
  font-size: 24px;
  padding: 16px 16px;
  margin-bottom: 30px;
  border-radius: 20px;
`;

export const Title = styled.text`
  font-size: 22px;
  font-weight: bold;
`;

export const Subtitle = styled.text`
  font-size: 18px;
  margin-top: 8px;
`;

export const DivImage = styled.div`
  display: flex;
  flex-direction: column;
`;