import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

/* Componente para renderizar boton para agregar la direccion a enviar el producto */

export const DeliveryAddressButton: React.FC = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <ContainerView>
        <IconAddress source={require('../../assets/images/addressIcon.png')} />
        <TextStyled>Agregar dirección de entrega</TextStyled>
      </ContainerView>
    </TouchableOpacity>
  );
};

const TextStyled = styled.Text`
  color: #008f7e;
  font-size: 16px;
  font-weight: 300;
  margin-left: 10px;
  font-family: 'Gotham';
`;

const IconAddress = styled.Image`
  width: 21.72px;
  height: 24.38px;
`;

const ContainerView = styled.View`
  flex-direction: row;
  justify-content: center;
`;
