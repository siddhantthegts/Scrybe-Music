import React, {useContext, useState} from 'react';
import {Text, Image, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

import Amplify,{Auth,API,graphqlOperation} from 'aws-amplify'
import {Button} from 'react-native-elements'
import styles from './styles';
import {Song} from "../../types";
import {updateAccount, createLibrary} from '../../graphql/mutations'
import {listAccounts, listLibrarys} from '../../graphql/queries'
import {AppContext} from "../../src/AppContext"

export type SongListItemProps = {
  song: Song
}


const SongListItem = (props: SongListItemProps, {navigation}) => {
  const { song } = props;
  const { setSongId } = useContext(AppContext);
  const [email,setEmail] = useState('');
  const [acc,setAcc] = useState([]);
  const [subscribe, setSubscribe] = useState("Subscribe")

  const getlibrary = async() => {
    
    const library = await API.graphql(graphqlOperation(listLibrarys,{filter : {albumId: {eq: song.id}}}))
    console.log(library)
    if(library.data.listLibrarys.items[0].albumId == song.id){
    setSubscribe("Unsubscribe")
    }
    else{
      setSubscribe("Subscribe")
    }
  
    
  }
  getlibrary()
  


  const getthisuser = async() => {
    try{
      const user = await Auth.currentAuthenticatedUser()
      const email = await (user.attributes.email)
     
      
        const data = await API.graphql(graphqlOperation(listAccounts,{filter: {email: {eq: email}}}));
        if(data.data.listAccounts.items != null){
          setAcc(data.data.listAccounts.items);
          console.log(acc[0])
          if(acc[0].credits > 0){
             const library = {
               accountId : acc[0].id,
               albumId : song.id,
               artist : song.artist,
               imageUri : song.imageUri,
               title : song.title,
               url : song.url,

             }
             const newLibrary = await API.graphql(graphqlOperation(createLibrary, {input: library}));
             alert(song.title + " Subscribed and Added to your Library")
             

          }
          else {
            alert("You have no credit available, please add more to your account to subscribe to this artist’s song.")
          }
          

        }
       
        
     
    }
        catch(e){
          alert(e)
        }
      }

  const onPlay = () => {
    setSongId(song.id);
  }
  const onSubscribePress = () =>{
    alert("2 Credits will be deducted from accounts")
  }

  return (
    <TouchableOpacity onPress={onPlay}>
      <View  style={styles.outercontainer}>
        <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
          <Text style={styles.credits}>2 Credits</Text>
        </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={getthisuser} disabled = {subscribe=="Unsubscribe" ? true : false} >
          <Text style={{fontSize: 15,color: "#fff", backgroundColor: "#000", padding : 10}}>{subscribe}</Text>
        </TouchableOpacity>
        
      </View>
    </TouchableOpacity>
  )
}

export default SongListItem;

