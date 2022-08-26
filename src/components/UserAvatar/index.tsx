import React from 'react';
import styled from 'styled-components/native';

/* Componente que renderiza el avatar del usuario */

export const UserAvatar: React.FC = () => {
  return <ImageStyled source={require('../../assets/userPhoto.png')} />;
};

const ImageStyled = styled.Image`
  width: 40px;
  height: 40px;
`;
