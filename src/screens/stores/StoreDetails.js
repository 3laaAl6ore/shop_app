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
import { Icon } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import * as categoriesActions from "../../../store/actions/GetCategoriesAction";
export const store_id = (props)=>{
 return props.route.params.data._id;
};

const  StoreDetails = (props) => {
  console.log("in screen detalis:");

   console.log(props);
   
   const dispatch = useDispatch();
   const [isLoading, setIsLoading] = useState(false);
 
   const getAllCategories = useCallback(async () => {
     let action = categoriesActions.get_categories_action;
     setIsLoading(true);
     try {
       await dispatch(action);
       setIsLoading(false);
     } catch (err) {
       setIsLoading(false);
     }
   }, [setIsLoading, dispatch, categoriesActions.get_categories_action]);
 
   useEffect(() => {
    getAllCategories();

   }, [getAllCategories]);

   const all_categories = useSelector((state) => state.all_categories);
   console.log("----->");
   console.log(all_categories);
   console.log(all_categories.all_categories.length);
  


  const picURI = props.route.params.data.logo;
  const storeName = props.route.params.data.storeName;
  const isDelivery = props.route.params.data.isDelivery;
  const isTakeaway = props.route.params.data.isTakeaway;
  const Discription = props.route.params.data.storeDescription;
  const workingHours = props.route.params.data.workingHours;

  const [isVisible, setIsVisible] = useState(false);
 



  const dayName = [    "non",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",]
    return(
      <View>
      {
          all_categories?.all_categories?.length == 0 ?(
            <ActivityIndicator size="large" color={Colors.happy_green} />
           ):( 
              <Text> data</Text>

           )
      }
      </View>
    );
  /*
    return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "##F4EDEA",
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
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              alignItems: "flex-end",
            }}
          >
            {" "}
            {storeName}{" "}
          </Text>
        </View>
        <View
          style={{
            width: "50%",
            justifyContent: "center",
          }}
        >
          <Icon
            raised
            name="heartbeat"
            type="font-awesome"
            color="#f50"
            onPress={() => setIsVisible(!isVisible)}
          />
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
                  width: "70%",
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
                  style={{ width: 100, height: 150, resizeMode: "contain" }}
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
                {workingHours.map(({_id, day, isOpen ,fromHour,  toHour}) => (
                  <View
                    key={_id}
                    style={{
                      width: "100%",
                      padding: 5,
                      borderRadius: 12,
                      marginTop: 6,
                      backgroundColor:Colors.blue_back,
                      
                    }}
                  >
                    {
                      isOpen ? (
                       <Text style={{ fontSize:12 , fontWeight:"bold", color:Colors.happy_green}}>{dayName[day]} From {fromHour} To {toHour}</Text>
                        
                      ):(
                        <Text style={{ fontSize:12 , fontWeight:"bold", color:Colors.red}}>{dayName[day]} Closed</Text>

                      )

                    }
         
                  
                  </View>
                ))}
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: Colors.happy_green,
                  }}
                >
                  {storeName}
                </Text>

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
      </View>
    </SafeAreaView>
  );
  */
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
