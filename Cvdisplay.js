import { StatusBar } from 'expo-status-bar';

import React,{useState,useEffect,useContext} from 'react';
import {Text,Linking,Button,View,TextInput,StyleSheet} from 'react-native';
import { CVContext } from './App';

const CVDisplay=({navigation})=>{
  
  const cvContent=useContext(CVContext)
 
  
  return (
    <View style={styles.container}>

  <Text style={styles.title}>CV</Text>
   <View style={styles.cvshow}>
  <Text style={styles.textstyle}>Fullname:{cvContent.fname}</Text>
  <Text style={styles.textstyle}>Slackname:{cvContent.slackname}</Text>
  <Text style={styles.textstyle} onPress={()=>{Linking.openURL(`${cvContent.github}`)}}>Github Profile: {cvContent.github}</Text>
  <Text style={styles.textstyle}>Bio:{cvContent.bio}</Text>
  </View>
  <View style={styles.butcontainer}>
  <Button  style={styles.buttonstyle}  onPress={()=>{
    navigation.navigate('AddCV')}} title='Edit CV'color={'#f01d1d'}/>
    </View>
  </View>
  )
  
}
export default CVDisplay
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
