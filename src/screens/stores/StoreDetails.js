import React, { useEffect, useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,

} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import * as categoriesActions from "../../../store/actions/GetCategoriesAction";
import { styles } from "../../utility/store_style";

import StoreHeader from "../../components/store_components/header";
import MoreInfo from "../../components/store_components/MoreInfo";

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
  //console.log(all_categories);

  const picURI = props.route.params.data.logo;
  const storeName = props.route.params.data.storeName;
  const isDelivery = props.route.params.data.isDelivery;
  const isTakeaway = props.route.params.data.isTakeaway;
  const Discription = props.route.params.data.storeDescription;
  const workingHours = props.route.params.data.workingHours;

  //const category_name = all_categories.All_categories[0].categoryName;

  const [isVisible, setIsVisible] = useState(false);
  const [isFavorate, setIsFavorate] = useState(false);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <StoreHeader
          picURI={picURI}
          storeName={storeName}
          isVisible={isVisible}
          isFavorate={isFavorate}
          setIsVisible={() => setIsVisible(!isVisible)}
          setIsFavorate={() => setIsFavorate(!isFavorate)}
        />
        <MoreInfo
          picURI={picURI}
          storeName={storeName}
          isVisible={isVisible}
          workingHours={workingHours}
          Discription={Discription}
          setIsVisible={() => setIsVisible(!isVisible)}
        />

        {all_categories?.all_categories?.All_categories?.length > 0 ? (
          <View style={{ flex: 1 , padding:10 }}>
            <FlatList
              data={all_categories.all_categories.All_categories}
              keyExtractor={(item) => item._id}
              renderItem={(category_item) => (
                <View>
                  <Text style={styles.storeName}>
                    {category_item.item.categoryName}
                  </Text>
                  <TouchableOpacity style={styles.row_category}>
                    <Image
                      source={{
                        uri: category_item.item.categoryImage,
                      }}
                      resizeMode="cover"
                      style={styles.category_logo}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        ) : (
          <Text>hellow </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export const ScreenOptions = (Navdata) => {
  return {
    headerShown: false,
  };
};
export default StoreDetails;
