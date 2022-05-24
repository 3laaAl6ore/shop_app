import React, { useEffect, useState, useCallback } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";

import { styles } from "../../utility/store_style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
//delivery-dining  shopping-bag

const StoreHeader = (props) => {
  console.log("in header");
  //console.log(props);

  const picURI = props.picURI;
  const storeName = props.storeName;
  const isVisible = props.isVisible;
  const isFavorate = props.isFavorate;
  const [sub, setSub] = useState(false);
  const isSub = sub ? "unsubscribe" : "subscribe";
  const sub_backColor = sub ? "#455A64" : "#9F3551";
  const sub_color = sub ? "#ebebeb" : "#ebebeb";
  const sub_Topborder = sub ? 50 :0;
  const sub_Bottomborder = sub ? 0 :50;
  console.log(sub);
  return (
    <View>
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
      </View>

      <View
        style={{
          width: "100%",
          padding: 5,
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "#88CCF1",
        }}
      >
        <View
          style={{
            width: "30%",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <MaterialCommunityIcons
            name="chat"
            color="#Fa1"
            size={28}
            onPress={() => console.log("go 2 chat")}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: sub_backColor,
            width: "42%",
            padding: 20,
            alignItems: "center",
            borderBottomRightRadius: sub_Bottomborder,
            borderBottomLeftRadius: sub_Bottomborder,
            borderTopEndRadius: sub_Topborder,
            borderTopLeftRadius: sub_Topborder,
          }}
          onPress={() => setSub(!sub)}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              textTransform: "uppercase",
              color: sub_color ,
            }}
          >
            {isSub}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: "30%",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          {isFavorate ? (
            <Fontisto
              name="heart"
              color="red"
              size={28}
              onPress={() => props.setIsFavorate(!isFavorate)}
            />
          ) : (
            <Fontisto
              name="heart-alt"
              color="#Fa1"
              size={26}
              onPress={() => props.setIsFavorate(!isFavorate)}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default StoreHeader;
