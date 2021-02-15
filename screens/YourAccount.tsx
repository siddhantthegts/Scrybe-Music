import React, { useState } from 'react'
import {Text,View,StyleSheet,TextInput, TouchableOpacity} from 'react-native'

import {Auth,graphqlOperation} from 'aws-amplify'
import {LinearGradient} from 'expo-linear-gradient'


export default function YourAccount({navigation}) {
    const [email, setEmail] = useState([])
    const [name, setName] = useState([])
    const [phonenumber,setPhonenumber] = useState([])
    const [email_verified,setEmailVerified] = useState([])
    const [phone_verified,setPhoneVerified] = useState([])
    const hint = "Your Name"
    const user = async () => { 
        const userdata = await Auth.currentAuthenticatedUser()
        setEmail(userdata.attributes.email)
        setName(userdata.attributes.name)
        setPhonenumber(userdata.attributes.phone_number)
        setEmailVerified(userdata.attributes.email_verified)
        setPhoneVerified(userdata.attributes.phone_number_verified)
        
        
    }
    user()

    const inputname = (text) => {
        setName(text)

    }
    const saveUser = async() => {
        alert("Saved Successfully")



    }
    return (
        <View style = {styles.container}>
            <LinearGradient
      colors={['#004aad', '#0a0a0a']}>
          <View style={{width : '100%', height : '100%'}}>
            <Text style={styles.title}>Your Account</Text>
            <View style={styles.accountinfo}>
                <Text style={styles.toptitle}>Name</Text>
            <TextInput style={styles.email} value={name} placeholder={hint} onChangeText={text => inputname(text)}/>
            </View>
            <View style={styles.accountinfo}>
                <Text style={styles.toptitle}>Phone Number</Text>
            <TextInput style={styles.email} value={phonenumber} onChangeText={text => onChangeText(text)}/>
            {phone_verified ? <Text style={{color :"#5bea2e",margin: 5,fontWeight : "bold"}}>Phone Verified</Text> : 
            <Text style={{color :"#ea4d2e",margin: 5,fontWeight : "bold"}}>Not Verified </Text>}
            </View>
            <View style={styles.accountinfo}>
                <Text style={styles.toptitle}>Email</Text>
                
            <TextInput style={styles.email} value={email}  onChangeText={text => onChangeText(text)}/>
            {email_verified ? <Text style={{color :"#5bea2e",margin: 5,fontWeight : "bold"}}>Email Verified</Text> : 
            <Text style={{color :"#ea4d2e",margin: 5,fontWeight : "bold"}}>Not Verified </Text>}
            </View>
            <TouchableOpacity style={styles.savebutton} onPress={() => saveUser()} ><Text style={styles.savetext}>Save Changes</Text></TouchableOpacity>
            </View>
            </LinearGradient>
            </View>
    )

}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : "#4458BE",
    },
    title : {
        padding : 5,
        fontSize : 30,
        alignSelf :"center",
        color : "#FBBF5B"
    },
    accountinfo : {
        padding : 15,

    },
    toptitle : {
        color : "#fff",
        marginLeft : 10,
    }
    ,
    email : {
        width : "100%",
        backgroundColor : "#fff",
        color : "#000",
        marginTop : 10,
        height : 40,
        borderWidth : 2,
        padding : 10,
        borderRadius : 10,
        
    },
    savebutton  : {
        padding : 10,
        backgroundColor : "#000",
        marginTop : 50,
        width : 300,
        alignSelf : "center",
        
    },
    savetext : {
        color : "#FBBF5B",
        fontSize : 20,
        alignSelf : "center"
    }
    

})