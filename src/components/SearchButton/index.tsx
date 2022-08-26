import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

/* Componente que renderiza el boton para buscar productos/restaurantes */

export const SearchButton: React.FC = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <ImageStyled source={require('../../assets/images/iconSearch.png')} />
    </TouchableOpacity>
  );
};

const ImageStyled = styled.Image`
  width: 24px;
  height: 23.96px;
`;
