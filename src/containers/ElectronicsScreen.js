import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Products from '../components/Products';
import ShoppingCartIcon from './ShoppingCartIcon';
import { electronics } from '../Data';
import { connect } from 'react-redux';

class ElectronicsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={require("../assets/back.png")}
                style={styles.image} />
            </TouchableOpacity>
            <Text style={styles.title}>Electronics</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Cart')}>
            <ShoppingCartIcon />
          </TouchableOpacity>
        </View>
        <Products products={electronics} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product =>
      dispatch({ type: 'ADD_TO_CART', payload: product }),
  };
};

export default connect(null, mapDispatchToProps)(ElectronicsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 45,
    backgroundColor: "tomato",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  image: {
    height: 25,
    width: 25,
    marginLeft: 10,
    tintColor: "white"
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    marginLeft: 15
  },
});
