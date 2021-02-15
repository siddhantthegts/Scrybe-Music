import React from 'react'
import {View,Text,TouchableOpacity,Modal} from "react-native"
import {WebView} from 'react-native-webview'


export default class PaymentScreen extends React.Component{
    
    
    render(){
    return(
        <View style={{ flex: 1,alignItems : "center" }}>
        <WebView
          source={{uri : 'https://www.downloadatliberty.com/payment.html'}}
          startInLoadingState={true}
          originWhitelist={['*']}
          scalesPageToFit={true}
          javaScriptEnabled={true}
          style={{
            width: 320,
            height: 300,
          }}
        />
  </View>
    )
    }
}