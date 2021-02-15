import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator } from 'aws-amplify-react-native'
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayerWidget from './components/PlayerWidget';
import Amplify,{Auth,API,graphqlOperation} from 'aws-amplify'
import config from './aws-exports'
import {createAccount} from './graphql/mutations'
import {listAccounts} from './graphql/queries'
import {AppContext} from './src/AppContext'
Amplify.configure(config)
  ;

    const getthisuser = async() => {
      try{
        const user = await Auth.currentAuthenticatedUser()
        

        const email = (user.attributes.email)
        const phonenumber = user.attributes.phone_number
        const emailverified = user.attributes.email_verified
        
         
        
          
          
          const data = await API.graphql(graphqlOperation(listAccounts));
          const accounts = data.data.listAccounts.items
          if(accounts.length != 0) 
          {
          for(let i=0;i<=accounts.length-1;i++){
            if(email==accounts[i].email){
      
             console.log("User is updated")
              
          }
          else{
            const userinfo = {
              email : email,
              name : email,
              credits : "0"
            };
            const account = async() => { await API.graphql({ query: createAccount, variables: {input: userinfo}});}
            account()
          
          } 
        }
      }
      else{
        const userinfo = {
          email : email,
          name : email,
          credits : "0"
        };
        const account = async() => { await API.graphql({ query: createAccount, variables: {input: userinfo}});}
        account()
      }
       

      }
      catch (e){
          console.log(e + " Error encountered");
      }
    }
    
    getthisuser();
    

function App() {
  
  

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  
  const [songId, setSongId] = useState<string|null>(null);
  

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
          songId,
          setSongId: (id: string) => setSongId(id),
        }}>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidget />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App)
