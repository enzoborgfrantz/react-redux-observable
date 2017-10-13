import styled from 'styled-components';
import { purpleWithOpacity, white } from '../styles/colors';
import { desktopWidth } from '../styles/mediaQueries';

export default styled.button`
  appearance: none;
  background-color: transparent;
  color: ${white};
  border: 2px solid ${purpleWithOpacity(0.7)};
  border-radius: 5px;
  font-family: Raleway;
  font-weight: 400;
  width: 100%;
  height: 44px;
  outline: none;
  font-size: 18px;
  user-select: none;

  @media (${desktopWidth}) {
    max-width: 400px;
  }

  &:hover {
    transition: border-color .25s ease-in;
    cursor: pointer;
    border-color: ${purpleWithOpacity(1)}
  }

  &:active {
    border-color: ${purpleWithOpacity(0.35)}
  }
`;
