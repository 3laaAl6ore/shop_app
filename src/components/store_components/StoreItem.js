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
import AppColors from "../../utility/AppColors";
import { styles } from "../../utility/store_style";

//delivery-dining  shopping-bag

const StoreItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.row}>
      <View style={{ padding:0}}>
        <Image source={{ uri: props.store.logo }} style={styles.logo} />
      </View>
      <View
        style={{
          padding: 5,
          width: "60%",
          borderBottomColor: AppColors.happy_green,
          borderBottomWidth: 1.2,
        }}
      >
        <Text style={styles.storeName}>{props.store.storeName}</Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "200",
            color: AppColors.bne,
            marginLeft: 11,
          }}
        >
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

export default StoreItem;
