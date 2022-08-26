import React from 'react';
import {TCategorieData, TFavoriteData, TRestaurantData} from '../models';
import {
  restaurantsData,
  categoriesData,
  favoritesData,
} from '../utils/constants';

//funcion auxiliar para generar de forma random un true falso en probabilidades de 2 fallo cada 8
const randomBoolean = (probability: number) => {
  return Math.random() < probability;
};

//hook para simular llamada a una API que puede salir reject - 1 segundo de timeout
export const useFetchData = () => {
  const fetchData: () => Promise<{
    restaurantsData: TRestaurantData[];
    categoriesData: TCategorieData[];
    favoritesData: TFavoriteData[];
  }> = React.useCallback(
    () =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          const success = randomBoolean(0.8);

          if (success) {
            resolve({
              restaurantsData,
              categoriesData,
              favoritesData,
            });
          } else {
            reject('Error loading data');
          }
        }, 1000),
      ),
    [],
  );

  return fetchData;
};
