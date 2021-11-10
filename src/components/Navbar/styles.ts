import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 32px;

  a {
    color: ${colors.white};
    text-transform: none;
    font-size: 18px;
  }

  div {
    transition: all 0.5s;
    :hover {
      transition: all 0.5s;
      position: relative;
      width: 75px;
      height: 75px;
    }
  }
  > ul {
    display: flex;
    list-style: none;

    > li {
      display: flex;
      margin-left: 30px;
      transition: 0.3s;

      &:hover {
        color: #d2d2d2;
      }
    }
  }

  span {
    margin-left: 8px;
  }
`;

export const Logo = styled.div`
`
