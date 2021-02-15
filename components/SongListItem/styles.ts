import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  outercontainer: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    
    

  },
  button:{
    marginTop : 30,
    marginRight : 25,

  },
  container: {
    flexDirection: 'row',
    margin: 15,
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
  }
})

export default styles;