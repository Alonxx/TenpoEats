import {TCategorieData, TFavoriteData, TRestaurantData} from '../models';

export const restaurantsData: TRestaurantData[] = [
  {
    name: 'McDonalds',
    image: require('../assets/images/mcdonaldRestaurant.png'),
    score: '3.5',
    deliveryTime: '10-50',
    discount: 50,
  },
  {
    name: 'MELT pizzas',
    image: require('../assets/images/meltRestaurant.png'),
    score: '4.5',
    deliveryTime: '10-60',
    discount: 30,
  },
  {
    name: 'YOKONO',
    image: require('../assets/images/yokonoRestaurant.png'),
    score: '3.5',
    deliveryTime: '10-50',
    discount: 20,
  },
  {
    name: 'Lasagna Pizza',
    image: require('../assets/images/papajohnsRestaurant.png'),
    score: '3.5',
    deliveryTime: '10-50',
    discount: 10,
  },
];

export const categoriesData: TCategorieData[] = [
  {
    name: 'Hamburguesas',
    image: require('../assets/images/burguerCategorie.png'),
  },
  {
    name: 'Italiana',
    image: require('../assets/images/italianCategorie.png'),
  },
  {
    name: 'Pizzas',
    image: require('../assets/images/pizzasCategorie.png'),
  },
];

export const favoritesData: TFavoriteData[] = [
  {
    name: 'Combo hamburguesa Bigmac',
    score: '3.5',
    deliveryTime: '10-50',
    restaurantName: 'Mcdonalds',
    image: require('../assets/images/bigmacFavorite.png'),
    restaurantLogo: require('../assets/images/mcdonaldRestaurant.png'),
  },
  {
    name: 'Pizza mediana 3 ingredientes',
    score: '3.5',
    deliveryTime: '10-50',
    restaurantName: 'MELT pizzas',
    image: require('../assets/images/pizzaFavorite.png'),
    restaurantLogo: require('../assets/images/meltRestaurant.png'),
  },
];
