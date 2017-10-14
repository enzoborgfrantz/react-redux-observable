import React from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { cyanWithOpacity, silver, navyLight } from '../styles/colors';

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

const Text = styled.span`
  font-size: 20px;
  font-family: Raleway;
  color: ${silver};
`;

const SmallText = styled.span`
  font-family: Raleway;
  font-size: 14px;
  color: ${silver};
`;

const Icon = styled(FontAwesome)`
  color: ${cyanWithOpacity(0.75)};
  padding-right: 5px;
`;

const UserDetails = styled.div`
  display: flex;
  padding-left: 5px;
  flex-direction: column;
  justify-content: space-between;
`;

const TextWithIcon = ({ text, iconName, style }) => (
  <span style={style}>
    <Icon name={iconName} />
    <SmallText>{text}</SmallText>
  </span>
);

export default ({ avatar, username, name = 'Enzo Borg Frantz', location, company = 'GoEuro', bio = 'I write code for money', ...props }) => (
  <UserResult {...props}>
    <Avatar avatar={avatar} />
    <UserDetails>
      <div>
        <Text style={{ color: cyanWithOpacity(0.75) }}>{username}</Text>
        <Text style={{ paddingLeft: '5px' }}>{name}</Text>
      </div>
      <div>
        <TextWithIcon text={company} iconName="briefcase" />
        <TextWithIcon style={{ paddingLeft: '10px' }} text={location} iconName="map-marker" />
        <TextWithIcon style={{ paddingLeft: '10px' }} text={bio} iconName="quote-left" />
      </div>
    </UserDetails>
  </UserResult>
);
