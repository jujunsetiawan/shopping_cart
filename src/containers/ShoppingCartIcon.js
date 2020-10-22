import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux"

const ShoppingCartIcon = (props) => (
    <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
        <View style={styles.border}>
            <Text style={styles.text}>{props.cartItems.length}</Text>
        </View>
        <Image
            source={{ uri: 'https://img.icons8.com/material-sharp/2x/shopping-cart.png' }}
            style={styles.image}
        />
    </View>
)

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

export default connect(mapStateToProps)(ShoppingCartIcon);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    },
    border: {
        position: "absolute",
        height: 25,
        width: 25,
        borderRadius: 15,
        backgroundColor: 'rgba(95,197,123,0.8)',
        right: 15,
        bottom: 15,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000
    },
    text: {
        fontWeight: "bold",
        color: "white"
    },
    image: {
        height: 30,
        width: 30,
        tintColor: "white"
    }
});