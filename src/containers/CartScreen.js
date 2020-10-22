import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Products from '../components/Products';
import ShoppingCartIcon from './ShoppingCartIcon';
import { connect } from 'react-redux';

class CartScreen extends Component {
  render() {
    console.log(this.props.cartItems);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{flexDirection: "row", alignItems: "center"}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack ()}>
              <Image
                style={styles.image}
                source={require("../assets/back.png")} />
            </TouchableOpacity>
            <Text style={styles.title}>Keranjang Saya</Text>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate ('Cart')}>
            <ShoppingCartIcon/>
          </TouchableOpacity>
        </View>
        {this.props.cartItems.length > 0
          ? <Products
            onPress={this.props.removeItem}
            products={this.props.cartItems}
          />
          : <View style={styles.screen}>
            <Text style={styles.text}>Silahkan Pilih Produk</Text>
          </View>}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: product =>
      dispatch ({type: 'REMOVE_FROM_CART', payload: product}),
  };
};

export default connect (mapStateToProps, mapDispatchToProps) (CartScreen);

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
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.6)'
  }
});
