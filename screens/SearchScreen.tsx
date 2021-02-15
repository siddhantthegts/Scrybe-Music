import React, { useState,useEffect, useContext } from 'react'
import {TextInput,StyleSheet,Image,FlatList,Modal,Button,TouchableOpacity,View,Text} from 'react-native'

import {EvilIcons} from '@expo/vector-icons'
import {API, graphqlOperation} from 'aws-amplify'
import {listSongs} from '../graphql/queries'
import styles from '../components/SongListItem/styles'
import {AppContext} from '../src/AppContext'
import { LinearGradient } from 'expo-linear-gradient';





export default function SearchScreen ({navigation}){
    
    const [songs,setSongs] = useState([])
    const [showModal,setShowModal] = useState([false])
    const [index,setIndex] = useState([0])

    const {setSongId} = useContext(AppContext)

    
        const fetchSongs = async(searchtxt) => {
            try{
                
                const data = await API.graphql(graphqlOperation( listSongs,{filter: {title: {contains: searchtxt}}},));
                
                if( data.data.listSongs.items != ""){
                    setSongs(data.data.listSongs.items)
                    

                }
                else{
                    alert("No Results Found")
                }
                

            }
            catch(e){
                console.log(e)

            }
        }
        const navigate = (item) =>{
            navigation.navigate("MusicPlayer",{item})
            
        }
        

    
  
    
    

    return (
        <View>
        <LinearGradient
        colors={['#004aad', '#0a0a0a']}>
        <View style={style.outerconatiner}>
           
        <View style={style.container}>
           
        
        
 
        <EvilIcons name="search"  size={20} style={style.ImageStyle} />
 
          <TextInput
              style={style.input}
              placeholder="Search..."
              underlineColorAndroid="transparent"
              onChangeText={(text) => fetchSongs(text)}
          />
          
 
        
 
      </View>
      
      <FlatList data={songs}
          renderItem= {({item}) => <TouchableOpacity onPress={() => navigate(item)}>
          <View style={styles.container} style={styles.outercontainer}>
          <View style={styles.container}>
          <Image source={{ uri: item.imageUri }} style={styles.image} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
            
          </View>
          </View>
          
        </View></TouchableOpacity>}
          keyExtractor = {(item) => item.id}
          />
          
         
      </View>
      </LinearGradient>
      </View>
     

    )
}
const style = StyleSheet.create({
    outerconatiner:{
        width : "100%",
        height : "100%",
    },
    
    container: {
        width: "100%",
        height: 40,
        backgroundColor : '#fff',
        flexDirection: 'row',
      },
      input:{
          width: "80%",
          
      },
     
    ImageStyle: {
       padding : 10
    }
})
