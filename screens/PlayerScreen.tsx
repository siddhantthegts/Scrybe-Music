import React,{useState,useEffect,useContext} from 'react'
import {View,Text,Image, StyleSheet} from 'react-native'
import MusicPlayer from '../components/MusicPlayer'
import { AntDesign,FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import {Audio} from 'expo-av'
import { LinearGradient } from 'expo-linear-gradient';
import { INTERRUPTION_MODE_IOS_DO_NOT_MIX } from 'expo-av/build/Audio';
import {AppContext} from '../src/AppContext'
 




export default function PlayerScreen(props) {
    const[sound,setSound] = useState<Sound|null>(null)
  const [isPlaying,setIsPlaying] = useState<boolean>(true)
  const [duration,setDuration] = useState<number>(null)
  const [position,setPosition] = useState<number>(null)
  const { setSongId } = useContext(AppContext);
  
  
  const onPlaybackStatusUpdate = (status) =>
  {
    setIsPlaying(status.isPlaying)
    setDuration(status.durationMillis)
    setPosition(status.positionMillis)
  }

  const playCurrentSong = async() => {

    await Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX;
    Audio.setAudioModeAsync({
      staysActiveInBackground : true,
    })
    

    if(sound){
      await sound.unloadAsync()
    }
   const {sound : newsound} = await Audio.Sound.createAsync(
     {uri : props.route.params.item.url},
     {shouldPlay : isPlaying},
     
     onPlaybackStatusUpdate
   )
   setSound(newsound)
   
  }


  useEffect(() => {
           playCurrentSong()
  },[]
  
  )
  const onPlayPauseOnPress = async() => 
   {if (!sound){
    return
   }
  
   if(isPlaying){
     await sound.stopAsync()
     setIsPlaying('false')
     
   }
   else{
     await sound.playAsync()
     setIsPlaying('true')
   }
  }
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  const getProgress = () =>
  {
    if(position == null || duration == null || sound == null){
      return 0;
    }
    return (position / duration) * 100
  }
  
    return (
      
        <View style={styles.container}>
          <LinearGradient
      colors={['#004aad', '#0a0a0a']}>
            <Image source={{uri : props.route.params.item.imageUri}} style={styles.image}/>
            <View style={styles.durationcontainer} >
            <Text style={styles.zeroduration} > 0:00 </Text>
            <Text style={styles.duration}> {millisToMinutesAndSeconds(duration)} </Text>
            </View>
            <View style={styles.progressbackground}> 
            <View style={[styles.progress, {width : `${getProgress()}%` }]} />
            </View>
            <Text style={{fontSize: 30, color: "#fff", alignSelf: "center",margin : 10}}> {props.route.params.item.title} </Text>
            <Text style={{fontSize: 20, color: "#ccc", alignSelf: "center",margin : 5}}> {props.route.params.item.artist} </Text>
            <Text style={{fontSize: 20, color: "#ccc", alignSelf: "center",margin : 5}}> From Album - {props.route.params.item.album.by} </Text>
            <View style={styles.iconcontainer}>
                <AntDesign name="stepbackward" size={34} color="white" style={styles.backward} />
                <FontAwesome style={styles.play} name={isPlaying ? 'pause' : 'play'} size={34} color={"white"} onPress={onPlayPauseOnPress}/>
                <AntDesign name="stepforward" size={34} color="white" style={styles.forward}/>
            </View>
            </LinearGradient>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : 30,

    },
image : {
    width : "100%",
    height : 330,
    padding : 10,
    alignItems : "flex-end",
    
},
iconcontainer : {
    marginTop : 40,
    marginLeft : 30,
    marginRight : 30,
    flexDirection : "row",
    justifyContent : "space-around"
    
},
backward : {
    padding : 10,
    marginRight : 15,

},
play : {
padding : 10,
marginRight : 15,
marginLeft : 15,

},
forward : {
    padding : 10,
    marginLeft : 15,
},
progressbackground : {
  height : 8,
  backgroundColor : "#ccc",
  marginTop : 15,
},
progress : {
    borderBottomRightRadius : 20,
    borderTopRightRadius : 20,
    height : 8,
    backgroundColor : 'skyblue',
    
    },
    addtolist : {
      padding : 10,
      marginLeft : 15,
    },
    durationcontainer : {
      width : "100%",
      display : "flex",
      flexDirection : "row",
      padding : 10,
      justifyContent : "space-between"
    },
    zeroduration : {
      
      color : "#aaa"
    },
    duration : {
      color : "#aaa",
    }
})