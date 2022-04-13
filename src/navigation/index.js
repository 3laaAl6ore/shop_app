import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DashboardScreen from '../screens/dashboard';
import CartScreen from '../screens/cart';
import MenuScreen from '../screens/menu';
import StoresScreen from '../screens/stores';

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
             options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color}) => (
                  <MaterialCommunityIcons name="home" color={color} size={20} />
                ),
              }}
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
        </StoresStackNavigation.Navigator>
    )
}
export const TabsBottom = ()=>{
    return(
        <TabsBottomNavigation.Navigator>
        <TabsBottomNavigation.Screen name="Dashboard" component={DashboardStack} />
        <TabsBottomNavigation.Screen name="Cart" component={CartStack} />
        <TabsBottomNavigation.Screen name="Menu" component={MenuStack} />
        <TabsBottomNavigation.Screen name="Stores" component={StoresStack} />
      </TabsBottomNavigation.Navigator>
    )
}