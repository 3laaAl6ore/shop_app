import React ,{useState} from 'react';
import { 
  StyleSheet, 
  Text,
  View ,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {TabsBottom} from './src/navigation/index';

export default function App() {

  const[email,setEmail] = useState("");
  const[password,setPassword] = useState("");
  const[mobile,setMobile] = useState("");
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");
 
  return (
    <NavigationContainer>
      <TabsBottom/>
  </NavigationContainer>
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
