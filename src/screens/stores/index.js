import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import StoreItem from "../../components/StoreItem";

const StoresScreen = (props) => {
  const allStores = useSelector((state) => state.allStores);
  console.log(allStores);
  return (
    <View>
      {allStores.allStores.stores.length > 0 ? (
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
        <Text>222</Text>
      )}
    </View>
  );
};

export default StoresScreen;
