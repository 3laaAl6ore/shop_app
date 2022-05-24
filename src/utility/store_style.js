import { StyleSheet } from "react-native";
import Colors from "./AppColors";
export  const  styles = StyleSheet.create({
    container: {
 
      width:"100%",
      padding: 15,
      backgroundColor: Colors.white,
     },
    logo: {
      height: 60,
      width: 60,
      opacity:0.88,
      borderRadius:50,
      
      
    },
  row: {
        marginBottom: 12,
        width: "100%",
        paddingVertical: 7,
        flexDirection: "row",
        borderRadius: 12,
        backgroundColor: "#ffffff",
        alignItems: "center",
        padding:5,
        margin:1
      },
  storeName:{ 
        fontSize: 19,
        fontWeight: "bold", 
        opacity:0.80,
        color: Colors.bold_red,
        marginLeft:11,
        shadowColor: Colors.light_green,
        shadowOpacity:1
    },
  sub:{
       backgroundColor:Colors.bold_red,
       width:"42%", 
       padding:20,
       alignItems: "center",
       borderBottomRightRadius:50,
       borderBottomLeftRadius:50,
      },
  row_category: {
       // marginBottom: 12,
        width: "100%",
       // paddingVertical: 15,
        flexDirection: "row",
        borderRadius: 12,
        alignItems: "center",
      
        margin:1,
        borderBottomColor:Colors.happy_green,
        borderBottomWidth:0.3,
        borderBottomRightRadius:20,

        borderBottomLeftRadius:20,
      padding:5
      },
      category_logo: {
        height:120,
        width: 120,
        opacity:0.90,
        borderRadius:15,
      },

  });