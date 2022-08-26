import React from 'react';

import styled from 'styled-components/native';
import {TRestaurantData} from '../../models';

/* 

Componente que renderiza la Card de un restaurante

*/

export const RestaurantCard: React.FC<TRestaurantData> = ({
  image,
  name,
  score,
  deliveryTime,
  discount,
}) => {
  return (
    <ViewContainer>
      <ImageLogo source={image} />
      <ViewDiscount>
        <TextDiscount big>{discount}%</TextDiscount>
        <TextDiscount>DCTO</TextDiscount>
      </ViewDiscount>
      <TextTitle>{name}</TextTitle>
      <ViewContainerSubtitle>
        <ImageIconStar source={require('../../assets/images/star.png')} />
        <TextSubTitle>
          {score} {deliveryTime} min.
        </TextSubTitle>
      </ViewContainerSubtitle>
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  justify-content: center;
  align-items: center;

  margin-left: 13px;
  position: relative;
  margin-top: 19px;
`;

const ViewContainerSubtitle = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const TextTitle = styled.Text`
  margin-top: 8px;
  font-weight: 300;
  font-size: 14px;
  font-family: 'Gotham';
`;

const TextSubTitle = styled.Text`
  margin-left: 3px;
  margin-top: 3px;
  font-weight: 300;
  font-size: 12px;
  font-family: 'Gotham';
`;

const ImageIconStar = styled.Image`
  width: 11.62px;
  height: 10.92px;
`;

const ImageLogo = styled.Image`
  width: 104px;
  height: 104px;
  border-radius: 18px;
`;

const ViewDiscount = styled.View`
  position: absolute;
  background-color: #00baa4;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  justify-content: center;
  top: -8px;
  right: -5px;
`;

const TextDiscount = styled.Text<{big: boolean}>`
  font-size: ${props => (props.big ? '10px' : '7px')};
  color: white;
  text-align: center;
  font-weight: 500;
  font-family: 'Gotham';
`;
