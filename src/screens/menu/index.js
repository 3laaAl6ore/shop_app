import React from 'react';
import { View , Text , ActivityIndicator } from 'react-native';

const MenuScreen = props =>{
    return (
        <View>
            <Text> menu</Text>
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
export default MenuScreen;