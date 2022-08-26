/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {View, FlatList, Alert, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {
  Logo,
  SearchButton,
  UserAvatar,
  DeliveryAddressButton,
  RestaurantCard,
  CategorieCard,
  FavoriteCard,
  SkeletonLoading,
} from '../components';

import {useFetchData} from '../hooks';
import {TCategorieData, TFavoriteData, TRestaurantData} from '../models';

/* Screen Home 

Encargado de renderizar la pagina inicial, unidendo los componentes y el maquetado
Hace la peticion de la API para los datos de los restaurantes


*/

export const Home: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);

  const [data, setData] = React.useState<{
    restaurantsData: TRestaurantData[];
    categoriesData: TCategorieData[];
    favoritesData: TFavoriteData[];
  }>({
    restaurantsData: [],
    favoritesData: [],
    categoriesData: [],
  });

  const fetchData = useFetchData();

  //Useefect para el manejo de la peticion a la API
  React.useEffect(() => {
    if (loading) {
      setData({
        restaurantsData: [],
        favoritesData: [],
        categoriesData: [],
      });
      fetchData()
        .then(dataFetched => {
          setData({
            ...dataFetched,
          });

          setLoading(false);
          setRefreshing(false);
        })
        .catch(_ => {
          createReconnectAlert();
          setLoading(false);
          setRefreshing(false);
        });
    }
  }, [loading]);

  //Funcion que crea el Alert cuando hay error en la conexion con la API
  const createReconnectAlert = () =>
    Alert.alert(
      'Error de conexión',
      `¡Vaya! Hubo un error al traer los datos 
      Revisa tu conexión y reintenta`,
      [
        {
          text: 'Reintentar',
          onPress: () => setLoading(true),
        },
      ],
    );

  const handleRefresh = React.useCallback(() => {
    setRefreshing(true);
    setLoading(true);
  }, []);

  return (
    <SafeAreaViewStyled edges={['right', 'left', 'top']}>
      <ScrollViewContainer
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }>
        <ViewHeaderContainer>
          <UserAvatar />
          <SearchButton />
        </ViewHeaderContainer>
        <View>
          <Logo />
        </View>

        <ViewContainerRounded>
          <ViewContainerAddressButton>
            <DeliveryAddressButton />
          </ViewContainerAddressButton>

          <ViewContainerRounded white>
            <ViewContainerOptions>
              {!loading && data.restaurantsData.length ? (
                <>
                  <ViewContaiterCards>
                    <TextTitle>RESTAURANTES</TextTitle>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                      data={data.restaurantsData}
                      contentInset={{right: 10, top: 0, left: 0, bottom: 0}}
                      renderItem={({item}) => <RestaurantCard {...item} />}
                    />
                  </ViewContaiterCards>
                  <ViewContaiterCards>
                    <TextTitle>CATEGORÍAS</TextTitle>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                      data={data.categoriesData}
                      contentInset={{right: 10, top: 0, left: 0, bottom: 0}}
                      renderItem={({item}) => <CategorieCard {...item} />}
                    />
                  </ViewContaiterCards>
                  <ViewContaiterCards>
                    <TextTitle>TUS FAVORITOS</TextTitle>
                    <FlatList
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}
                      data={data.favoritesData}
                      contentInset={{right: 10, top: 0, left: 0, bottom: 0}}
                      renderItem={({item}) => <FavoriteCard {...item} />}
                    />
                  </ViewContaiterCards>
                </>
              ) : (
                <SkeletonLoading />
              )}
            </ViewContainerOptions>
          </ViewContainerRounded>
        </ViewContainerRounded>
      </ScrollViewContainer>
    </SafeAreaViewStyled>
  );
};

const SafeAreaViewStyled = styled(SafeAreaView)`
  background-color: #f2f2f2;
  flex: 1;
`;

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
`;

const ViewContaiterCards = styled.View`
  margin-bottom: 59px;
`;

const ViewHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px 0px 16px;
`;

const ViewContainerRounded = styled.View<{white: boolean}>`
  background-color: ${props => (props.white ? 'white' : '#D4F9F5')};
  flex: 1;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
`;

const ViewContainerAddressButton = styled.View`
  padding: 22px 56px 22px 57px;
`;

const TextTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin-left: 16px;
  font-family: 'Gotham';
`;

const ViewContainerOptions = styled.View`
  padding: 38px 0px 58px 0px;
  justify-content: space-between;
  flex: 1;
`;
