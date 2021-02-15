import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection : 'column'
      
    },
   
    outercontainer: {
      flexDirection : 'row',
      justifyContent : "space-around",
      
      
  
    },
    button:{
      marginTop : 30,
      marginRight : 25,
  
    },
    songcontainer: {
      flexDirection: 'row',
      margin: 5,
    },
    image: {
      width: 75,
      height: 85,
      borderRadius: 10,
    },
    rightContainer: {
      width : 150,
      justifyContent: 'space-around',
      marginLeft: 15,
    },
    title: {
      color: 'white',
      fontSize: 24,
      width : 190,
      
    },
    artist: {
      color: '#777777',
      fontSize: 13,
    },
    credits : {
      fontSize : 13,
      color : "#ccc"
    },
    unsubscribe : {
      padding : 15,
      backgroundColor : "#010101",
      color : "#f7f7f7",
      borderRadius : 10,
      margin : 8
      
  
    }
   
  });
  export default styles;