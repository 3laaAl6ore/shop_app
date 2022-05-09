import React from 'react';
import { View , Text , ActivityIndicator } from 'react-native';

const CartScreen = props =>{
    return (
        <View>
            <Text> Cart </Text>
        </View>
    )
}
export const ScreenOptions = (Navdata) => {
    return {
   //   headerTitle: Navdata.route.params.data.storeName,
      headerStyle: { backgroundColor: "#DFA11111" },
      headerTitleStyle: {
        color: "#000000",
      },
      headerTitleAlign: "center",
      headerLeftStyletitle: "center",
    };
  };
export default CartScreen;