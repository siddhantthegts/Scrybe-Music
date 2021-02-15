import * as React from 'react';
import {useEffect,useState} from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';
import {API, graphqlOperation} from 'aws-amplify'
import {listAlbumCategorys} from '../graphql/queries'
import { LinearGradient } from 'expo-linear-gradient';



export default function HomeScreen() {

  const [categories,setCategories] = useState([])

  useEffect( () => {
    const fetchAlbumCategorys = async () => {
      try{
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        
        setCategories(data.data.listAlbumCategorys.items)
        

      }
      catch (e){
        console.log(e);
      }
    }

    fetchAlbumCategorys()
  } )
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#004aad', '#0a0a0a']}>
       <FlatList
       style={styles.liststyle}
        data={categories}
       renderItem= {({item}) => (<AlbumCategory title={item.title} albums={item.albums.items} 
       />)}
       showsVerticalScrollIndicator = {false}
       keyExtractor = {(item) => item.id}  />
       </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  liststyle : {
    marginBottom : 80,
  }
});
