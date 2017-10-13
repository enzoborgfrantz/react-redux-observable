import styled from 'styled-components';
import { white, navyLight, silver, navyDark } from '../styles/colors';
import { desktopWidth } from '../styles/mediaQueries';

export default styled.input`
  border: none;
  appearance: none;
  border-radius: 5px;
  height: 35px;
  padding: 0 10px;
  background-color: ${navyLight};
  color: ${white};
  outline: none;
  width: 100%;
  box-sizing: border-box;
  font-size: 18px;
  font-family: Raleway;
  font-weight: 300;
  transition: background-color .15s ease-in;
  &:focus {
    background-color: ${navyDark};
  }
  &::placeholder {
    color: ${silver};
  }
  @media(${desktopWidth}) {
    max-width: 500px;
  }
`;
