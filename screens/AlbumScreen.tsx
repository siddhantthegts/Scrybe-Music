import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {View, Text,Button,} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import SongListItem from '../components/SongListItem';
import AlbumHeader from '../components/AlbumHeader'
import {API,graphqlOperation} from 'aws-amplify'
import { getAlbum } from '../graphql/queries'
import {LinearGradient} from 'expo-linear-gradient'


const AlbumScreen = ({navigation}) =>{ 
    
    const route = useRoute();
    const albumId = route.params.id;

  const [album, setAlbum] = useState(null)

    useEffect( () => {
        console.log(route)
        const fetchAlbumDetails = async () => {
            try {
              const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }))
              setAlbum(data.data.getAlbum)
            } catch (e) {
              console.log(e);
            }
          }
      
          fetchAlbumDetails();
    }, []);

    if (!album) {
        return <Text style={{color : "#ffffff",alignContent:"center",fontWeight:"bold"}}>Loading...</Text>
      }
    return(
     
       
    <View style={{flex : 1, height : '100%' }}>
        <LinearGradient
      colors={['#004aad', '#0a0a0a']}>
        
        <FlatList  data = {album.songs.items}
        renderItem= {( {item} ) => <SongListItem song={item} /> }
        keyExtractor ={(item) => item.id}
        ListHeaderComponent = {() => <AlbumHeader album={album}/>}  />
        </LinearGradient>
    </View>
    
    
)}


export default AlbumScreen;
