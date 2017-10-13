import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { white, silver, whiteWithOpacity, burgandy, navyLight } from '../styles/colors';

const UserResult = styled.div`
  width: 100%;
  background-color: ${navyLight};
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  margin-bottom: 5px;
  transition: opacity 0.2s ease-in;
  ${props => props.firstResult && 'border-top-left-radius: 5px; border-top-right-radius: 5px;'};
  ${props => props.lastResult && 'border-bottom-left-radius: 5px; border-bottom-right-radius: 5px;'};
  &:hover {
    opacity: .65;
    cursor: pointer;
  }
`;

const Avatar = styled.div`
  background: url(${props => props.avatar});
  width: 50px;
  height: 50px;
  background-size: contain;
  border-radius: 5px;
  opacity: 0.65;
`;

const Text = styled.div`
  padding-left: 5px;
  font-size: 22px;
  font-family: Raleway;
  color: ${silver};
`;

const LocationIcon = styled(FontAwesome)`
  color: ${silver};
`;

export default ({ avatar, username, ...props }) => (
  <UserResult {...props}>
    <Avatar avatar={avatar} />
    <Text>{username}</Text>
    <LocationIcon name={'map-marker'} /> 
    <FontAwesome name="fa-map-marker " style={{ color: white, before: { content: '\f185' } }} size="2x">hl</FontAwesome>
  </UserResult>
);
