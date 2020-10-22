import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './containers/HomeScreen';
import ElectronicsScreen from './containers/ElectronicsScreen';
import BooksScreen from './containers/BooksScreen';
import ShoppingCartIcon from './containers/ShoppingCartIcon';
import CartScreen from './containers/CartScreen';

const Stack = createStackNavigator ();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Electronics" component={ElectronicsScreen} />
        <Stack.Screen name="Books" component={BooksScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
