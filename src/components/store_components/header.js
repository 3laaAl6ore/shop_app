import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,

  Image,

} from "react-native";

import { styles } from "../../utility/store_style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//delivery-dining  shopping-bag

const StoreHeader = (props) => {

  
  const picURI = props.picURI;
  const storeName = props.storeName;
  const isVisible = props.isVisible;

  return (
    <View
    style={{
      flexDirection: "row",
      width: "100%",
      marginLeft: "5%",
    }}
  >
    <View
      style={{
        justifyContent: "center",
        width: "30%",
      }}
    >
      <Image
        style={styles.logo}
        resizeMode="cover"
        source={{ uri: picURI }}
      />
    </View>
    <View
      style={{
        width: "50%",
        justifyContent: "center",
      }}
    >
      <Text style={styles.storeName}> {storeName} </Text>
    </View>
    <View
      style={{
        width: "50%",
        justifyContent: "center",
      }}
    >
      <MaterialCommunityIcons
        raised
        name="more"
        size={36}
        color="#f50"
        onPress={() => props.setIsVisible(!isVisible)}
      />
    </View>
    <View
      style={{
        justifyContent: "center",
        width: "30%",
      }}
    ></View>
  </View>
  );
};

export default StoreHeader;
