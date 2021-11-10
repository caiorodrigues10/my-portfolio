import styled from 'styled-components';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  background: #ffffff;
  box-shadow: -5px 7px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 40px;
  margin-bottom: 100px;
  padding: 16px 32px;
  padding-bottom: 56px;


  > h1 {
    font-weight: ${fonts.bold};
    color: ${colors.primary};
    margin-bottom: -8px;
  }
  
    > span {
      display: flex;
      margin-top: 24px;
      background: #f5f5f5;
      height: 70px;
      border-radius: 8px;
      justify-content: space-between;
      align-items: center;

      .package {
        display: flex;
        padding-left: 32px;
        font-size: 16px;
        font-weight: ${fonts.semibold};
      }

      .dataSale {
        text-align: right;
        padding-right: 32px;
        font-size: 18px;
        font-weight: ${fonts.semibold};

        > text {
          display: flex;
          color: #636363;
          font-weight: normal;
          font-size: 14px;
        }
      }
    }
`;

export const Line = styled.div`
  width: 50px;
  background: #18a4a0;
  height: 5px;
  margin-top: 16px;
`;