import React from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'
import {Library} from '../../types'
import styles from './styles'
import {Auth,API,graphqlOperation} from 'aws-amplify'
import {listAccounts,listLibrarys} from '../../graphql/queries'
import {deleteLibrary} from '../../graphql/mutations'
export type LibraryListProps = {
    library : Library
  }
const LibraryList = (props : LibraryListProps) => {
  const unsubscribeSong = async () => {
    const songDetails = {
      id: props.library.id,
    };
    const deletedTodo = await API.graphql({ query: deleteLibrary, variables: {input: songDetails }});
    alert("Unsubscribed "+ props.library.title)
    
  
  }

  return(
    <View style={styles.songcontainer} >
          <View style={styles.songcontainer}>
          <Image source={{ uri: props.library.imageUri }} style={styles.image} />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{props.library.title}</Text>
            <Text style={styles.artist}>{props.library.artist}</Text>
            
          </View>
          <TouchableOpacity onPress={unsubscribeSong}>
            <Text style={styles.unsubscribe}>Unsubscribe</Text>
          </TouchableOpacity>
          </View>
          
        </View>
  )

}
export default LibraryList