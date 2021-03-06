import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import StoreItem from "../../components/store_components/StoreItem";
import Colors from "../../utility/AppColors";
const StoresScreen = (props) => {




  //------------------------------------------------------//
  const allStores = useSelector((state) => state.allStores);
 // console.log(allStores);
  
  return (
    <View>
      {
      allStores.allStores?.stores?.length > 0 ? (
        <FlatList
          data={allStores.allStores.stores}
          keyExtractor={(item) => item._id}
          renderItem={(store) => (
            <StoreItem
              store={store.item}
              onClick={() => {
                props.navigation.navigate("StoreDetails", { data: store.item });
              }}
            />
          )}
        />
      ) : (
        <ActivityIndicator size="large" color={Colors.happy_green} />
      )}
    </View>
  );
};
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
export default StoresScreen;
