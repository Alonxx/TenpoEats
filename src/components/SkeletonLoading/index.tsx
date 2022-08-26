import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

/* Componente que renderiza el skelenton para el loading de la llamada a la API */

const SkelentoMenuOptions: React.FC<{marginTop: number}> = ({marginTop}) => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item
        flexDirection="column"
        marginLeft={20}
        marginTop={marginTop}>
        <SkeletonPlaceholder.Item width={180} height={20} borderRadius={4} />
        <SkeletonPlaceholder.Item marginTop={20} flexDirection="row">
          {Array.from(Array(5)).map((_, index) => (
            <SkeletonPlaceholder.Item
              key={index}
              marginRight={10}
              width={80}
              height={80}
              borderRadius={8}
            />
          ))}
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export const SkeletonLoading: React.FC = () => {
  return (
    <>
      {[0, 30, 30].map((margin, index) => (
        <SkelentoMenuOptions marginTop={margin} key={index} />
      ))}
    </>
  );
};
