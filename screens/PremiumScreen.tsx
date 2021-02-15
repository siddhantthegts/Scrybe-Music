import React,{useState} from 'react'
import {StyleSheet,Image,TouchableOpacity,Platform,Text,View} from 'react-native'
import BuyCreditsScreen from './BuyCreditsScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient'
import {Auth} from 'aws-amplify'
const data = [
    {
        id : "1",
        title : "Your Account"
    },
    {
        id : "2",
        title: "Purchase History"
    },
    {
        id : "3",
        title : "Credits",
    },
    {
        id : "4",
        title : "Your Songs",
    },
    {
        id : "5",
        title : "Upgrade Plan"
    }
]


export default function PremiumScreen ({navigation}){
    const signout = async () => {
        try {
            await Auth.signOut();
            navigation.navigate('App')
        } catch (error) {
            console.log('error signing out: ', error);
        }
    
    }
    
  
    return (
        
        <View style={style.outerconatiner}>
            <LinearGradient
      colors={['#004aad', '#0a0a0a']}>
            <View style={{width : '100%', height : '100%'}}>
            
        <Image style={style.profilepic} source={{uri : "https://upleap.com/blog/wp-content/uploads/2018/10/how-to-create-the-perfect-instagram-profile-picture.jpg"}}/>
        <View style={style.profilemeta}>
            <Text style={style.following}>12 Following</Text>
            <Text style={style.credits}>100 Credits</Text>
            <Text style={style.libraries}>3 Library</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("BuyCreditsScreen")}><Text style={style.item}> Buy Credits </Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("AccountScreen")}><Text style={style.item}> Your Account </Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>signout}><Text style={style.item}> Sign Out </Text></TouchableOpacity>
        
        </View>
        </LinearGradient>
        
        
   
        

        
      </View>
     

    )
    }

const style = StyleSheet.create({
    outerconatiner: {
        flex : 1,
        flexDirection : 'column',
        height : '100%',
        backgroundColor : '#0a0a0a'
    },
    profilepic : {
        width : 200,
        height: 200,
        alignSelf : "center",
        borderRadius : 100,
        margin : 10,  
    },
    profilemeta : {
        alignSelf : "center",
        flexDirection : "row",
        margin : 20,
    },
    following : {
        color : "#fff",
        fontSize : 20,
        marginRight : 15,
    },
    credits : {
        color : "#fff",
        fontSize : 20,
        marginLeft : 15,
        marginRight : 15,
    },
    libraries : {
        color : "#fff",
        fontSize : 20,
        marginLeft : 15,

    },
    item: {
        ...Platform.select({
            ios: {
                margin: 5,
                padding: 5,
                fontSize : 20,
                color: "#FBBF5B",
                backgroundColor: "#000",
                textAlign: "center",
            },
            android: {
                margin: 5,
                padding: 5,
                fontSize : 20,
                color: "#FBBF5B",
                backgroundColor: "#000",
                textAlign: "center",
            },
            default: {
              // other platforms, web for example
              margin: 5,
                padding: 5,
                fontSize : 20,
                color: "#FBBF5B",
                backgroundColor: "#000",
                textAlign: "center",
                width : 200,
                alignSelf : "center"
            }
          })
        
      }
   
    
    
    
    
})