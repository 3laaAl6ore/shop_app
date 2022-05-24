import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from "react-native";
import Colors from "../../utility/AppColors.js";
import { useDispatch, useSelector } from "react-redux";
import * as categoriesActions from "../../../store/actions/GetCategoriesAction";
import { styles } from "../../utility/store_style";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import StoreHeader from "../../components/store_components/header";


const StoreDetails = (props) => {
  const store_id = props.route.params.data._id;

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const getAllCategories = useCallback(async () => {
    let action = categoriesActions.get_categories_action(store_id);
    setIsLoading(true);
    try {
      await dispatch(action);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  }, [
    setIsLoading,
    dispatch,
    categoriesActions.get_categories_action(store_id),
  ]);

  useEffect(() => {
    getAllCategories(store_id);
  }, []);

  const all_categories = useSelector((state) => state.all_categories);



  console.log("----------------------");
  console.log("----------------------");
  console.log("----------------------");
  console.log(all_categories);

  const picURI = props.route.params.data.logo;
  const storeName = props.route.params.data.storeName;
  const isDelivery = props.route.params.data.isDelivery;
  const isTakeaway = props.route.params.data.isTakeaway;
  const Discription = props.route.params.data.storeDescription;
  const workingHours = props.route.params.data.workingHours;

  //const category_name = all_categories.All_categories[0].categoryName;

  const [isVisible, setIsVisible] = useState(false);
  const [isFavorate, setIsFavorate] = useState(false);

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
    <SafeAreaView style={styles.container}>

      <StoreHeader picURI={picURI} storeName={storeName} setIsVisible={()=>setIsVisible(!isVisible)}  />

      <View
        style={{
          width: "100%",
          padding: 5,
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center",
          borderBottomWidth:0.50,
          borderBottomColor:"#88CCF1",
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
        <TouchableOpacity style={styles.sub}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "#ebebeb",
            }}
          >
            subscribe
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
              onPress={() => setIsFavorate(!isFavorate)}
            />
          ) : (
            <Fontisto
              name="heart-alt"
              color="#Fa1"
              size={26}
              onPress={() => setIsFavorate(!isFavorate)}
            />
          )}
        </View>
      </View>

      <View style={{ width: "100%", padding: 15 }}>
        <Modal
          animationType="fade"
          visible={isVisible}
          transparent={true}
          style={{ width: " 100%" }}
          onRequestClose={() => {
            setIsVisible(!isVisible);
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
                padding: 30,
                margin: 30,
                borderRadius: 10,
                shadowColor: Colors.black,
                shadowOffset: { width: 0, height: 2 },
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
                  setIsVisible(!isVisible);
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
      {
        all_categories?.all_categories?.All_categories?.length > 0 ? (
          <View style={styles.container}>
        <FlatList
          data={all_categories.all_categories.All_categories}
          keyExtractor={(item) => item._id}
          renderItem={(category_item) => (
            <Text>{category_item.item.categoryName}</Text>
          )}
        />
          </View>

        ) : (
      <Text>hellow </Text>
          
        ) 
      }
    </SafeAreaView>
  );
};

export const ScreenOptions = (Navdata) => {
  return {
    headerShown: false,
  };
};
export default StoreDetails;
