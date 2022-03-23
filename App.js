import React ,{useState} from 'react';
import { 
  StyleSheet, 
  Text,
  View ,
  TouchableOpacity ,
  ActivityIndicator,
  TextInput
} from 'react-native';

export default function App() {

  const[email,setEmail] = useState(null);
  const[password,setPassword] = useState(null);
  const[mobile,setMobile] = useState(null);
  const[firstName,setFirstName] = useState(null);
  const[lastName,setLastName] = useState(null);
 
  return (
    <View style={styles.container}>

      <View style={styles.signUp}> 



      <TextInput
        style={styles.input}
        onChangeText={(text)=>setEmail(text)}
        value={email}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
 



      </View>

    </View>
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
