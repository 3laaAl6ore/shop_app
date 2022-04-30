import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import AppColors from "../utility/AppColors";

//delivery-dining  shopping-bag

const StoreItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={Styles.row}>
      <View style={{ padding: 5 }}>
        <Image source={{ uri: props.store.logo }} style={Styles.logo} />
      </View>
      <View style={{ padding: 10, width: "60%" }}>
        <Text style={{ fontSize: 20, fontWeight: "600" }}>
          {props.store.storeName}
        </Text>
        <Text style={{ fontSize: 14, fontWeight: "300" }}>
          {props.store.contactInfo.address} | {props.store.contactInfo.city}
        </Text>
      </View>
      <View style={{ padding: 10 }}>
        <View>
          {props.store.isDelivery ? (
            <MaterialIcons
              name="delivery-dining"
              color={AppColors.happy_green}
              size={32}
            />
          ) : (
            <View></View>
          )}
        </View>
        <View>
          {props.store.isTakeaway ? (
            <Entypo name="shopping-bag" color={AppColors.orange} size={26} />
          ) : (
            <View></View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
  },
  row: {
    marginBottom: 12,
    width: "100%",
    paddingVertical: 15,
    flexDirection: "row",
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },
});

export default StoreItem;
