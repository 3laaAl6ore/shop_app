import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as storeActions from "../../../store/actions/index";
import Colors from "../../utility/AppColors";

const DashboardScreen = props =>{

    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
  
    const getAllStores = useCallback(async () => {
      let action = storeActions.get_store_action();
      setIsLoading(true);
      try {
        await dispatch(action);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
      }
    }, [setIsLoading, dispatch, storeActions.get_store_action]);
  
    useEffect(() => {
      getAllStores();
    }, [getAllStores]);
  
    const allStores = useSelector((state) => state.allStores);
    console.log(allStores);
  
    return (
        <View>
        {
            isLoading > 0 ? (
              <ActivityIndicator size="large" color={Colors.happy_green} />
             ):( 
                <Text> data</Text>

             )
        }
        </View>
    )
}
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
export default DashboardScreen;