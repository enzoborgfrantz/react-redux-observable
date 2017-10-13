import styled from 'styled-components';
import { burgandyWithOpacity, white } from '../styles/colors';
import { desktopWidth } from '../styles/mediaQueries';

export default styled.button`
  appearance: none;
  background-color: transparent;
  color: ${white};
  border: 2px solid ${burgandyWithOpacity(0.7)};
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
    border-color: ${burgandyWithOpacity(1)}
  }

  &:active {
    border-color: ${burgandyWithOpacity(0.35)}
  }
`;
