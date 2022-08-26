import React from 'react';
import {View, Animated} from 'react-native';
import styled from 'styled-components/native';

/* Componente que renderiza el logo de la aplicación y sus animaciones */

export const Logo: React.FC = () => {
  const animatedDeliverer = React.useRef(
    new Animated.ValueXY({x: 0, y: 10}),
  ).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(animatedDeliverer, {
      toValue: {x: -60, y: 30},
      duration: 1000,
      useNativeDriver: false,
      delay: 1000,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      delay: 1000,
    }).start();
  }, [animatedDeliverer, fadeAnim]);

  const crossIcons: {style: {}; left: string; top: string}[] = [
    {
      style: {transform: [{rotate: '329deg'}]},
      left: '0px',
      top: '0px',
    },
    {
      style: {transform: [{rotate: '91deg'}]},
      left: '20px',
      top: '-20px',
    },
    {
      style: {transform: [{rotate: '18deg'}]},
      left: '120px',
      top: '-5px',
    },

    {
      style: {transform: [{rotate: '117deg'}]},
      left: '130px',
      top: '50px',
    },
  ];

  return (
    <ContainerView>
      <View>
        <TextLogoBig black>Tenpo</TextLogoBig>
        <TextLogoBig>Eats</TextLogoBig>
        <TextLogoSmall>DELIVER APP</TextLogoSmall>
      </View>
      <View>
        <Animated.View style={[animatedDeliverer.getLayout()]}>
          <ImageDeliverer
            source={require('../../assets/images/deliverer.png')}
          />
        </Animated.View>
        <Animated.View style={{opacity: fadeAnim}}>
          {crossIcons.map((cross, i) => (
            <ImageCrossLogo
              key={i}
              style={cross.style}
              left={cross.left}
              top={cross.top}
              source={require('../../assets/images/crossLogo.png')}
            />
          ))}
        </Animated.View>

        <ImageLogo source={require('../../assets/images/handPhone.png')} />
        <ViewDotsContainer>
          {Array.from(Array(3)).map((_, i) => (
            <ViewDot key={i} select={i === 1} />
          ))}
        </ViewDotsContainer>
      </View>
    </ContainerView>
  );
};

const ContainerView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 44px 0px 16px;
`;

const ViewDot = styled.View<{select: boolean}>`
  width: 6px;
  height: 6px;
  border: 1px solid black;
  border-radius: 50px;
  margin-left: 3px;
  background-color: ${props => (props.select ? '#00baa4' : 'none')};
`;

const ViewDotsContainer = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 10px;
  right: -30px;
`;

const TextLogoBig = styled.Text<{black: boolean}>`
  margin-top: -12px;
  font-size: 42px;
  font-family: 'Roboto';
  font-weight: 900;
  color: ${props => (props.black ? 'black' : '#00BAA4')};
`;

const TextLogoSmall = styled.Text`
  font-weight: 600;
  letter-spacing: 2.4px;
  font-size: 12px;
  color: black;
  font-family: 'Gotham';
`;

const ImageLogo = styled.Image`
  width: 118.86px;
  height: 181.09px;
  top: 20px;
`;
const ImageDeliverer = styled.Image`
  width: 107.06px;
  height: 129.19px;
  position: absolute;
`;
const ImageCrossLogo = styled.Image<{
  left: string;
  top: string;
  bottom: string;
  right: string;
}>`
  width: 7.9px;
  height: 7.9px;
  position: absolute;
  left: ${props => (props.left ? props.left : 0)};
  top: ${props => (props.top ? props.top : 0)};
  bottom: ${props => (props.bottom ? props.bottom : 0)};
  right: ${props => (props.right ? props.right : 0)};
`;
