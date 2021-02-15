import { StyleSheet,Platform} from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: Platform.OS == 'ios' ? 80 : 49,
    backgroundColor: '#131313',
    width: '100%',
    borderWidth: 1,
    opacity: 0.9,
    borderColor: 'black',
  },
  progress : {
  height : 3,
  backgroundColor : '#ffffff',
  
  },
  row : {
    flexDirection: 'row',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  nameContainer: {
    flexDirection: 'column',
    marginTop : 5,
    
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: "space-between",
    padding: 15
    
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5
  },
  artist: {
    color: 'lightgray',
    fontSize: 18,
  }
})

export default styles;