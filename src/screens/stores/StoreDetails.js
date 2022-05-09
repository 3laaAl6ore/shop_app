import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
} from "react-native";

const StoreDetails = (props) => {
  console.log("in screen detalis:");

  console.log(props);

  const picURI = props.route.params.data.logo;
  const storeName = props.route.params.data.storeName;
  const isDelivery = props.route.params.data.isDelivery;
  const isTakeaway = props.route.params.data.isTakeaway;

  return (
    <View style={{ padding: 20 }}>
       <View style={{flexDirection:'row'}}>

      <Image style={styles.logo} source={{uri: picURI }}/>
      <Text style={{justifyContent:'flex-end'}}> {storeName} </Text>
      </View>
 
    </View>
  );
};
export const ScreenOptions = (Navdata) => {
  return {
    headerShown: false,
    /*
    headerTitle: Navdata.route.params.data.storeName,
    headerStyle: { backgroundColor: "#DFA11111" },
    headerTitleStyle: {
      color: "#000000",
      fontWeight: "bold",
      fontSize: 19,
    },

    headerTitleAlign: "center",
    headerLeftStyletitle: "center",
  */
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  taskTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 25,
    paddingVertical: 3,
  },
  Discription: {
    fontSize: 16,
    fontWeight: "bold",
  },
  TOwner: {},
  logo: {
    height: 60,
    width: 60,
  },
});
export default StoreDetails;
