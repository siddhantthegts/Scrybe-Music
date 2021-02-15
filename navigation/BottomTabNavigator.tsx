import {Ionicons, Entypo, EvilIcons, MaterialCommunityIcons, FontAwesome5} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import {Image, Text, Button} from 'react-native';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AlbumScreen from '../screens/AlbumScreen';
import HomeScreen from '../screens/HomeScreen';
import { MaterialIcons } from '@expo/vector-icons';
import TabTwoScreen from '../screens/TabTwoScreen';
import SearchScreen from '../screens/SearchScreen'
import CreateAppConatiner from '../screens/CreateAppConatiner'
import PlayerScreen from '../screens/PlayerScreen'
import { BottomTabParamList, SearchParamList, TabOneParamList, TabTwoParamList } from '../types';
import {listAccounts} from '../graphql/queries'
import {Auth,API,graphqlOperation} from 'aws-amplify'



const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="home" size={30} style={{ marginBottom: -3 }} color={'#FBBF5B'} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} style={{ marginBottom: -3 }} color={'#FBBF5B'} />,
        }}
      />
      <BottomTab.Screen
        name="My Scrybe"
        component={TabTwoNavigator}
        options={{
      
          tabBarIcon: ({ color }) =>
          <MaterialIcons name="library-music" size={30} style={{ marginBottom: -3 }} color={'#FBBF5B'} />,
          
          
        } }
      />
      <BottomTab.Screen
        name="Account"
        component={PremiumNavigator}
        options={{
          tabBarIcon: ({ color }) => <Image
          source={require('../assets/images/scrybe-icon.png')}
          fadeDuration={0}
          style={{width: 18, height: 30}}
        />,
        }}
      />
    </BottomTab.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  let [credits,setCredits] = React.useState(0);
  const getthisuser = async() => {
    try{
      const user = await Auth.currentAuthenticatedUser()
      let useremail :String = user.attributes.email
     
      
        const data = await API.graphql(graphqlOperation(listAccounts,{filter: {email: {eq: useremail}}}));
        if(data.data.listAccounts.items[0] != null){
          console.log(data)
        if(data.data.listAccounts.items[0].credits > 0){
          setCredits(data.data.listAccounts.items[0].credits);
          
        }
          

        }
        
       
        
     
    }
        catch(e){
          alert("No")
        }
      }
      getthisuser()

  return (
    <TabOneStack.Navigator headerMode="float">
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Scrybe' }}
      />
      <TabOneStack.Screen
        name="AlbumScreen"
        component={AlbumScreen}
        options={{ headerTitle: 'Albums', headerTitleAlign : 'center', headerRight : (props) =>(
          <Text style={{color: 'white', padding: 10, fontSize: 15}}>{credits} Credits </Text>
        )}}
      />
    </TabOneStack.Navigator>
  );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator(){
  return(
    <SearchStack.Navigator>
      <SearchStack.Screen
      options={{headerTitle : 'Search'}}
      name= "SearchScreen"
      component={SearchScreen} 
       />
       <SearchStack.Screen
       name="MusicPlayer"
       component={PlayerScreen}
       options={{headerShown : false}}
       
       />

       
    </SearchStack.Navigator>
  )
}
const PremiumStack = createStackNavigator<PremiumParamList>();
function PremiumNavigator(){
  return(
    <PremiumStack.Navigator>
      <PremiumStack.Screen
      options={{headerTitle: 'Premium'}}
      name = "PremiumScreen"
      component={CreateAppConatiner}
      />
    </PremiumStack.Navigator>
  )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Library' }}
      />
    </TabTwoStack.Navigator>
  );
}
