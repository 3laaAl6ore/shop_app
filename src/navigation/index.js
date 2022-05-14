import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DashboardScreen ,{ScreenOptions as DashboardScreenOptions}from '../screens/dashboard/index';
import CartScreen ,{ScreenOptions as CartScreenOptions}from '../screens/cart/index';
import MenuScreen ,{ScreenOptions as MenuScreenOptions}from '../screens/menu/index';
import StoresScreen ,{ScreenOptions as StoreScreenOptions}from '../screens/stores/index';
import StoreDetailsScreen,{ScreenOptions as StoreDetailsScreenOptions} from '../screens/stores/StoreDetails';

const DashboardStackNavigation = createStackNavigator();
const CartStackNavigation = createStackNavigator();
const MenuStackNavigation = createStackNavigator();
const StoresStackNavigation = createStackNavigator();
const TabsBottomNavigation = createMaterialBottomTabNavigator();

export const DashboardStack = ()=>{
    return (
        <DashboardStackNavigation.Navigator>
            <DashboardStackNavigation.Screen
             name = "Dashboard"
             component={DashboardScreen}
             options={DashboardScreenOptions}
             />
        </DashboardStackNavigation.Navigator>
    )
}
export const CartStack = ()=>{
    return (
        <CartStackNavigation.Navigator>
            <CartStackNavigation.Screen name = "Cart" component={CartScreen} options={CartScreenOptions}/>
        </CartStackNavigation.Navigator>
    )
}
export const MenuStack = ()=>{
    return (
        <MenuStackNavigation.Navigator>
            <MenuStackNavigation.Screen name = "Menu" component={MenuScreen} options={MenuScreenOptions}/>
        </MenuStackNavigation.Navigator>
    )
}
export const StoresStack = ()=>{
    return (
        <StoresStackNavigation.Navigator>
            <StoresStackNavigation.Screen name = "Stores" component={StoresScreen} options={StoreScreenOptions}/>
            <StoresStackNavigation.Screen name = "StoreDetails" component={StoreDetailsScreen} options={StoreDetailsScreenOptions}/>
        </StoresStackNavigation.Navigator>
    )
}
export const TabsBottom = ()=>{
    return(
        <TabsBottomNavigation.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarColor:'#F4EDEA',
        }}
        activeColor="#DA2C38"
        inactiveColor="#1B2D2A"

        >
        <TabsBottomNavigation.Screen 
        name="dashboard" 
        component={DashboardStack}
        options={{
            tabBarLabel: null,
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="home" color={color} size={24} />
            ),
          }}
        />
        <TabsBottomNavigation.Screen 
        name="cart"
        component={CartStack}
        options={{
            tabBarLabel: null,
            tabBarIcon: ({ color}) => (
              <Ionicons name= "cart"  color={color} size={24} />
            ),
          }}
        />
        <TabsBottomNavigation.Screen
         name="stores"
         component={StoresStack}
         options={{
            tabBarLabel: null,
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="storefront" color={color} size={24} />
            ),
          }}
          />
         <TabsBottomNavigation.Screen 
        name="menu" 
        component={MenuStack}
        options={{
            tabBarLabel: null,
            tabBarIcon: ({ color}) => (
              <MaterialIcons name="menu" color={color} size={24} />
            ),
          }}
        />
      </TabsBottomNavigation.Navigator>
    )
}