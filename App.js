import { StatusBar } from 'expo-status-bar';

import React,{useState,useEffect} from 'react';
import {Text,Linking,Button,View,TextInput,StyleSheet} from 'react-native';
import { NavigationContainer,r} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CVDisplay from './Cvdisplay.js'
import CVEdit from './Cvedit.js'
 




const Stack= createNativeStackNavigator()
export const CVContext=React.createContext(null)
const DisplayCV = () => {
  const [cvdisplay,setCV]=useState({"fname":'Babatope Eyitayo','slackname':'eyitayoit','github':'https://github.com/eyitayoit-alt','bio':' A software developer with the sole objective of using technology to solve problems. My area of expertise file proccessing,data management and security,optimization and REST API'})
  
  const setName=(Fullname)=>{
         
         setCV({...cvdisplay,['fname']:Fullname})

  }
  const setSlackName=(slackname)=>{
         
    setCV({...cvdisplay,['slackname']:slackname})

}
const setGithub=(github)=>{
         
  setCV({...cvdisplay,['github']:github})

}
const setBio=(bio)=>{
         
  setCV({...cvdisplay,['bio']:bio})

}
const cvsetters={
  setName,setSlackName,setGithub,setBio
}

  return (
    <CVContext.Provider value={{...cvdisplay,...cvsetters}} >
   <NavigationContainer>
     
   <Stack.Navigator
   screenOptions={{
          headerStyle: {
            backgroundColor: '#f01d1d',
          },
          headerTintColor: '#fff',
        }}>
    <Stack.Screen  style={styles.screenstyle} name="Home" component={CVDisplay} options={{title:'MY CV'}} />
    <Stack.Screen  style={styles.screenstyle} name="AddCV" component={CVEdit} options={{title:'Edit MY CV'}} /> 
   
   
   </Stack.Navigator>
   
   </NavigationContainer>
   </CVContext.Provider>
   
  );
};
export default DisplayCV;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    width:'100%',
    justifyContent:'start',
    paddingLeft:20,
    paddingRight:20,
    rowGap:20,
    

   
  },
  input: {
    height: 40,
    marginTop:12,
    marginBottom:12,
    borderWidth: 1,
    padding: 10,
  },
  cvedit:{
    justifyContent:'start',
    backgroundColor: '#fff',
    padding:10,
  },
  cvshow:{
    alignContent:'center',

    width:'90%',
    marginTop:10,
    marginLeft:20,
    gap:30,
   
   
  },
  textstyle:{
     fontSize:20,
  },
 
  title:{
    marginTop:20,
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold',
    color:'#f01d1d'
  },
  butcontainer:{
    width:'90%',
    marginTop:20,
    marginLeft:'auto',
    marginRight:'auto'
    
  },
  stylesuccess:{
    color:'green',
  },
  stylerror:{
    color:'red'
  },
  screenstyle:{
    backgroundColor:'#f01d1d',
    color:'#fff'
  }

});
