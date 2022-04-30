import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import DashboardScreen from '../screens/dashboard/index';
import CartScreen from '../screens/cart/index';
import MenuScreen from '../screens/menu/index';
import StoresScreen from '../screens/stores/index';
import StoreDetailsScreen from '../screens/stores/StoreDetails';

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
             />
        </DashboardStackNavigation.Navigator>
    )
}
export const CartStack = ()=>{
    return (
        <CartStackNavigation.Navigator>
            <CartStackNavigation.Screen name = "Cart" component={CartScreen}/>
        </CartStackNavigation.Navigator>
    )
}
export const MenuStack = ()=>{
    return (
        <MenuStackNavigation.Navigator>
            <MenuStackNavigation.Screen name = "Menu" component={MenuScreen}/>
        </MenuStackNavigation.Navigator>
    )
}
export const StoresStack = ()=>{
    return (
        <StoresStackNavigation.Navigator>
            <StoresStackNavigation.Screen name = "Stores" component={StoresScreen}/>
            <StoresStackNavigation.Screen name = "StoreDetails" component={StoreDetailsScreen}/>
        </StoresStackNavigation.Navigator>
    )
}
export const TabsBottom = ()=>{
    return(
        <TabsBottomNavigation.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          tabBarColor:'#A57548',
        }}
        >
        <TabsBottomNavigation.Screen 
        name="dashboard" 
        component={DashboardStack}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="home" color={color} size={20} />
            ),
          }}
        />
        <TabsBottomNavigation.Screen 
        name="cart"
        component={CartStack}
        options={{
            tabBarLabel: 'cart',
            tabBarIcon: ({ color}) => (
              <Ionicons name= "cart"  color={color} size={20} />
            ),
          }}
        />
        <TabsBottomNavigation.Screen
         name="stores"
         component={StoresStack}
         options={{
            tabBarLabel: 'Stores',
            tabBarIcon: ({ color}) => (
              <MaterialCommunityIcons name="storefront" color={color} size={20} />
            ),
          }}
          />
         <TabsBottomNavigation.Screen 
        name="menu" 
        component={MenuStack}
        options={{
            tabBarLabel: 'Menu',
            tabBarIcon: ({ color}) => (
              <MaterialIcons name="menu" color={color} size={20} />
            ),
          }}
        />
      </TabsBottomNavigation.Navigator>
    )
}