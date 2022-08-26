import {ImageSourcePropType} from 'react-native';

export type TRestaurantData = {
  image: ImageSourcePropType;
  name: string;
  score: string;
  deliveryTime: string;
  discount: number;
};

export type TCategorieData = {
  image: ImageSourcePropType;
  name: string;
};

export type TFavoriteData = {
  image: ImageSourcePropType;
  restaurantLogo: ImageSourcePropType;
  restaurantName: string;
  name: string;
  score: string;
  deliveryTime: string;
};
