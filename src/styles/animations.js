import { keyframes } from 'styled-components';

export const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const fade = keyframes`
  from { opacity: 0.2; }
  to { opacity: 1; }
`;

export const glow = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`;

export const pulsate = keyframes`
  0% { opacity: 0; }
  10% { opacity: .5; }
  15% { opacity: 0; }
  50% { opacity: 0; }
  60% { opacity: 1; }
  65$ { opacity: 0; }
  80% { opacity: 1; }
  85% { opacity: 0; }
`;
