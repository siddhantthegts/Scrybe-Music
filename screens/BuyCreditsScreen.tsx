import React, { Component, useState } from 'react'
import {Text,View,StyleSheet,TouchableOpacity, ScrollView, TextInput} from 'react-native'
import useColorScheme from '../hooks/useColorScheme' 
import {LinearGradient} from 'expo-linear-gradient'

export default function BuyCreditsScreen ({navigation}){
    const [customcredit, setCustomCredit] = useState(0);

    const customAmountCalculator = (text) => {
        setCustomCredit(text*100)

    }
   
    return(
        <View style={styles.container}>
            <LinearGradient
      colors={['#004aad', '#0a0a0a']}>
          <View style={{width : '100%', height : '100%'}}>
            <Text style={styles.purchasetitle}>Choose Your Scrybe Subscription</Text>
            <ScrollView style={styles.scrollView}>
            <View style={styles.cards}>
                <Text style={styles.title} > Buy 100 Credits </Text>
                <Text style ={styles.info}>Credit Package will reoccur monthly to cover the subscriptions you have purchased. 
                When you unsubscribe from a song, credits will be added the following month</Text>
                <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}  >
                    <Text style={styles.buybutton}>$1</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.cards}>
                <Text style={styles.title} > Buy 200 Credits </Text>
                <Text style ={styles.info}>Credit Package will reoccur monthly to cover the subscriptions you have purchased. 
                When you unsubscribe from a song, credits will be added the following month*</Text>
                <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}  >
                    <Text style={styles.buybutton}>$2</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.cards}>
                <Text style={styles.title} > Buy 300 Credits </Text>
                <Text style ={styles.info}>Credit Package will reoccur monthly to cover the subscriptions you have purchased. 
                When you unsubscribe from a song, credits will be added the following month</Text>
                <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}  >
                    <Text style={styles.buybutton}>$3</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.cards}>
                
                <Text style={styles.title} > Enter Custom Amount </Text>
                <TextInput style={styles.amountinput} onChangeText={(text) => customAmountCalculator(text) }>  </TextInput>
                <Text style ={styles.info}> Enter the amount of your choice and get the credits that worth that Amount and continue Listen Songs on Scrybe</Text>
                <TouchableOpacity onPress={() => navigation.navigate("PaymentScreen")}  >
                    <Text style={styles.buybutton}>{customcredit} Credits</Text>
                </TouchableOpacity>

            </View>
          
            </ScrollView>
            </View>
            </LinearGradient>
        </View>
    )
    

}

const styles = StyleSheet.create({
 container : {
     flex : 1,
     backgroundColor : '#4458BE',
    
 },
 purchasetitle : {
     color : "#ddd",
     fontSize : 20,
     alignSelf : "center",
     margin : 10
     

 },
 scrollView : {
     marginBottom : 80,

 },
 cards : {
     backgroundColor : "#000",
     width : 250,
     borderRadius : 15,
     padding : 20,
     alignSelf : "center",
     margin : 10,
     textAlign : "center"
     
 },
 title : {
     fontSize : 18,
     color : "#eee",
     alignSelf : "center",
     
 },
 info : {
     fontSize : 10,
     color : "#ddd",
     marginLeft : 15,
     marginTop : 10,
 },
 buybutton : {
    margin: 5,
    padding: 5,
    fontSize : 30,
    color: "#FBBF5B",
    backgroundColor: "#000",
    textAlign: "center"
 },
 amountinput : {
     backgroundColor : "#f7f7f7",
     textAlign : 'center',
     borderRadius : 20,
     margin : 10,
     padding : 5,


 }
 
})