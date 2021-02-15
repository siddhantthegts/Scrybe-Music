import * as React from 'react';
import { StyleSheet,Text,View,TouchableOpacity,Image,FlatList, Button } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import {Auth,API,graphqlOperation} from 'aws-amplify'
import {listAccounts,listLibrarys} from '../graphql/queries'
import {deleteLibrary} from '../graphql/mutations'
import LibraryList from '../components/LibraryList';



export default function TabTwoScreen() {
  const [library,setLibrary] = React.useState([]);
  const [songId, setSongId] = React.useState('')
const getthisuser = async() => {
  try{
    const user = await Auth.currentAuthenticatedUser()
    const email = (user.attributes.email)
    const phonenumber = user.attributes.phone_number
    const emailverified = user.attributes.email_verified
    
      const data = await API.graphql(graphqlOperation(listAccounts));
      const accounts = data.data.listAccounts.items
      if(accounts.length != 0) 
      {
      for(let i=0;i<=accounts.length-1;i++){
        if(email==accounts[i].email){
          const accountid = accounts[i].id;
          const getlibrary = async () => {
            const library = await API.graphql(graphqlOperation(listLibrarys,{filter : {accountId : {eq : accountid}}}));
            setLibrary(library.data.listLibrarys.items)
          }
          getlibrary()
      }
      else{ alert("No record Found") } 
    }
  }
  else{alert("No User Found")}
  }
  catch (e){
      console.log(e + " Error encountered");
  }
}
getthisuser();




  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#004aad', '#0a0a0a']}>
          <View style={{width : '100%', height : '100%'}}>
          <FlatList data={library}
          renderItem= {({item}) => 
          <LibraryList library = {item} />}
          keyExtractor = {(item) => item.id}
          />
      </View>

</LinearGradient>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection : 'column'
    
  },
 
  outercontainer: {
    flexDirection : 'row',
    justifyContent : 'space-between',
    
    

  },
  button:{
    marginTop : 30,
    marginRight : 25,

  },
  songcontainer: {
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
  },
  unsubscribe : {
    padding : 15,
    backgroundColor : "#010101",
    color : "#f7f7f7",
    borderRadius : 10,
    margin : 8
    

  }
 
});
