import styled from 'styled-components';
import colors from '../../styles/colors';


export const Container = styled.div`
   color: ${colors.white};
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    text-align: right;
    margin-right: 150px;
    margin-top: 120px;
    h1 {
      font-size: 34px;
    }
    text {
      font-size: 30px;
    }
  }
`;

export const ImageFirst = styled.img`
  margin: 100px 0 0 100px;
  width: 500px;
`;

export const Text = styled.span`
  font-size: 24px;
  text-align: right;
`;