import React ,{useState} from 'react';
import { 
  StyleSheet, 
  Text,
  View ,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {TabsBottom} from './src/navigation/index';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import allStores from './store/reducers/GetStoresReducer';
import all_categories from './store/reducers/GetCategoriesReducer';
const rootReducer = combineReducers({
   allStores : allStores,
  all_categories:all_categories
});
const store = createStore(rootReducer , applyMiddleware(ReduxThunk));

export default function App() {

  return (
    <Provider store={store}>
        <NavigationContainer>
           <TabsBottom/>
       </NavigationContainer>
  </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center',
  },
  input:{
    color:"#Cd11",
    width:"100%",
    height:"100%"
  }
  
});
