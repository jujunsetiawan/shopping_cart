import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import ShoppingCartIcon from './ShoppingCartIcon';


class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.title}>Online Shop</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Cart")}>
              <ShoppingCartIcon />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles.background}>
              <Text style={styles.text}>Kategori Populer</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Electronics")}
              style={styles.content}>
              <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTCW44dGkMRhoCD3IuEDwaVXxQiCQzG3vuL_A&usqp=CAU' }}
                style={styles.image}
              />
              <Text style={styles.kategori}>Electronics</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Books")}
              style={styles.content}>
              <Image
                source={{ uri: 'https://lithub.com/wp-content/uploads/2019/07/used-books-store-2.jpg' }}
                style={styles.image}
              />
              <Text style={styles.kategori}>Book</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "tomato",
    height: 45,
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15
  },
  background: {
    height: 25,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "#fff",
    height: 170,
    width: 150,
    shadowColor: "#00000021",
    shadowOffset: { width: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    flexBasis: "47%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20
  },
  image: {
    height: 120,
    width: 137,
    borderRadius: 5,
    marginTop: 15
  },
  kategori: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 7,
    opacity: 0.6
  }
});
