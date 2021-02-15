import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    
    alignItems : "center",
    padding: 20,
    justifyContent : "center"
  },
  image: {
    width: 200,
    height: 200,
    margin: 15,
    borderRadius: 20,
  },
  name: {
    textAlign : "center",
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    
    
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 10
  },
  creator: {
    color: 'lightgray',
    margin: 5,
    fontSize: 20,
  },
  dot: {
    color: 'white',
    fontSize: 20,

  },
  likes: {
    color: 'lightgray',
    margin: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#000',
    height: 60,
    width: 175,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD700',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default styles;