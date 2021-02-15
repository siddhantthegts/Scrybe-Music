import React, {useContext, useEffect, useState} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import {AppContext} from "../../src/AppContext"
import styles from './styles';
import {Sound} from "expo-av/build/Audio/Sound";
import {API,graphqlOperation} from 'aws-amplify'
import {getSong} from '../../graphql/queries'




const PlayerWidget = () => {

  const [song, setSong] = useState(null);
  const [sound, setSound] = useState<Sound|null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number|null>(null);
  const [position, setPosition] = useState<number|null>(null);

  const { songId } = useContext(AppContext);
  const [isheart,setIsHeart] = useState<boolean>(false)

  

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
        setSong(data.data.getSong);
      } catch (e) {
        console.log(e);
      }
    }

    fetchSong();
  }, [songId])

  const onPlaybackStatusUpdate = (status) => {
    
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
    
  }

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }

    const { sound: newSound } = await Sound.createAsync(
      { uri: song.url },
      { shouldPlay: isPlaying },
      
      
      onPlaybackStatusUpdate
    )
    

    setSound(newSound)
    onPlayPausePress
  }

  useEffect(() => {
    if (song) {
      playCurrentSong();
      
    }
  }, [song])

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
      setIsPlaying(false)
    } else {
      await sound.playAsync();
      setIsPlaying(true)
    }
  }
  

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }

    return (position / duration) * 100;
  }
  

  if (!song) {
    return null;
  }
  const onheart = () => {
    if(isheart) {
      setIsHeart(false)
    }
    else {
      setIsHeart(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%`}]} />
      <View style={styles.row}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <View style={styles.iconsContainer}>
<TouchableOpacity onPress={onheart}>
          <AntDesign name={isheart ? 'heart' : 'hearto'} size={25} color ={"white"} />
          </TouchableOpacity>
            <TouchableOpacity onPress={onPlayPausePress}>
              <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PlayerWidget;