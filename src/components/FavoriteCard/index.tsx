import React from 'react';

import styled from 'styled-components/native';
import {TFavoriteData} from '../../models';

/* Componente que renderiza la card para las comdiad favoritas del usuario */

export const FavoriteCard: React.FC<TFavoriteData> = ({
  name,
  restaurantLogo,
  restaurantName,
  image,
  score,
  deliveryTime,
}) => {
  return (
    <ViewContainer>
      <ImageFood source={image} resizeMode={'center'} />
      <ImageRestaurant source={restaurantLogo} />
      <ViewContainerDescription>
        <ViewRow>
          <TextFood>{name}</TextFood>
          <ViewRow>
            <ImageIconStar source={require('../../assets/images/star.png')} />
            <TextFood>{score}</TextFood>
          </ViewRow>
        </ViewRow>
        <ViewRow>
          <TextRestaurant>{restaurantName}</TextRestaurant>
          <TextFood>{deliveryTime} min.</TextFood>
        </ViewRow>
      </ViewContainerDescription>
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 13px;
  margin-bottom: 10px;
  position: relative;
  margin-top: 19px;
  shadow-color: #000;
  shadow-offset: 0px 0.5px;
  shadow-opacity: 0.2;
  shadow-radius: 3px;
  elevation: 1;
  border-radius: 16px;
  background-color: white;
`;

const ViewContainerDescription = styled.View`
  height: 56px;
  max-height: 56px;
  width: 248px;
  padding: 8px 8px 16px 8px;
  justify-content: space-between;
`;

const ViewRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ImageFood = styled.Image`
  width: 248px;
  height: 96px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

const TextFood = styled.Text`
  font-weight: 400;
  font-size: 12px;
  font-family: 'Gotham';
  color: black;
`;

const TextRestaurant = styled.Text`
  font-weight: 600;
  font-size: 12px;
  font-family: 'Gotham';
  color: #00baa4;
`;

const ImageRestaurant = styled.Image`
  width: 42px;
  height: 42px;
  position: absolute;
  top: 8px;
  left: 12px;
`;

const ImageIconStar = styled.Image`
  width: 11.62px;
  height: 10.92px;
  margin-right: 3px;
`;
