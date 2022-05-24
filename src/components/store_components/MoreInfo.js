import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";

import { styles } from "../../utility/store_style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Fontisto from "react-native-vector-icons/Fontisto";
//delivery-dining  shopping-bag
import Colors from "../../utility/AppColors";
const MoreInfo = (props) => {
  console.log("in header");
  console.log(props);

  const picURI = props.picURI;
  const storeName = props.storeName;
  const isVisible = props.isVisible;
  const Discription = props.storeDescription;
  const workingHours = props.workingHours;
  const dayName = [
    "non",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <View style={{ padding: 5 }}>
      <Modal
        animationType="fade"
        visible={isVisible}
        transparent={true}
        style={{ flex: 1 }}
        onRequestClose={() => {
          props.setIsVisible(!isVisible);
        }}
      >
        <View
          style={{
            backgroundColor: Colors.gray_text,
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: "95%",
              // padding: 30,
              //  margin: 30,
              borderRadius: 10,
              shadowColor: Colors.black,
              // shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 20,
              alignItems: "center",
              backgroundColor: Colors.white,
            }}
          >
            <Image
              source={{
                uri: picURI,
              }}
              resizeMode="cover"
              style={styles.logo}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                color: Colors.light_green,
              }}
            >
              {"more about my store :)"}
            </Text>
            <Text>{Discription}</Text>
            <Text> Working Time </Text>
            {workingHours.map(({ _id, day, isOpen, fromHour, toHour }) => (
              <View
                key={_id}
                style={{
                  width: "100%",
                  padding: 5,
                  borderRadius: 12,
                  marginTop: 6,
                  backgroundColor: Colors.blue_back,
                }}
              >
                {isOpen ? (
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: Colors.happy_green,
                    }}
                  >
                    {dayName[day]} From {fromHour} To {toHour}
                  </Text>
                ) : (
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      color: Colors.red,
                    }}
                  >
                    {dayName[day]} Closed
                  </Text>
                )}
              </View>
            ))}
            <Text style={styles.storeName}>{storeName}</Text>

            <TouchableOpacity
              onPress={() => {
                props.setIsVisible(!isVisible);
              }}
              style={{
                backgroundColor: Colors.happy_green,
                alignItems: "center",
                width: "100%",
                paddingVertical: 20,
                borderRadius: 10,
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  color: Colors.white,

                  fontSize: 17,
                }}
              >
                GOT IT!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default MoreInfo;
