import React from 'react';
import styled from 'styled-components/native';
import {TCategorieData} from '../../models';

/* Componente que renderiza la Card de una categoria */

export const CategorieCard: React.FC<TCategorieData> = ({name, image}) => {
  return (
    <ViewContainer>
      <ImageLogo source={image} />
      <BackDrop>
        <TextTitle>{name.toUpperCase()}</TextTitle>
      </BackDrop>
    </ViewContainer>
  );
};

const ImageLogo = styled.Image`
  width: 152px;
  height: 65px;
`;

const BackDrop = styled.View`
  background-color: rgba(0, 0, 0, 0.3);
  width: 142px;
  height: 60px;
  border-radius: 8px;
  padding: 0;
  position: absolute;
  justify-content: center;
  z-index: 10;
`;

const TextTitle = styled.Text`
  font-weight: 800;
  font-size: 14px;
  font-family: 'Gotham';
  color: white;
  letter-spacing: 1.4px;
  align-self: center;
`;

const ViewContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 0px;
  margin-left: 10px;
  position: relative;
  margin-top: 19px;
`;
