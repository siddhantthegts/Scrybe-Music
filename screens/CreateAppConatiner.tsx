import * as React from 'react'
import { NavigationContainer,getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PremiumScreen from "./PremiumScreen";
import BuyCreditsScreen from "./BuyCreditsScreen";
import YourAccount from './YourAccount';
import PaymentScreen from './PaymentScreen'
import App from '../App'

function getHeaderTitle(route) {
    // If the focused route is not found, we need to assume it's the initial screen
    // This can happen during if there hasn't been any navigation inside the screen
    // In our case, it's "Feed" as that's the first screen inside the navigator
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  
   
  }
const Stack = createStackNavigator();
export default function CreateAppConatiner(){
    return(
        <NavigationContainer independent={true}  >
            <Stack.Navigator initialRouteName="PremiumScreen" headerMode ={'none'}>
                <Stack.Screen name="PremiumScreen" component={PremiumScreen} />
                <Stack.Screen name="BuyCreditsScreen" component={BuyCreditsScreen} 
                  options={({ route }) => ({
                    headerTitle: getHeaderTitle(route),
                  })}/>
                  <Stack.Screen name="AccountScreen" component= {YourAccount}/>
                  <Stack.Screen name="PaymentScreen" component={PaymentScreen}/>
                  <Stack.Screen name="App" component={App}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
    
}