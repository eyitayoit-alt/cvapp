import React,{useState} from 'react';
import {Text, Image,Button,View,TextInput,StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CVDisplay=({navigation})=>{
    const [cvdisplay,setCV]=useState({})
    const getCV=()=>{
   AsyncStorage.multiGet(['fname','slackname','github','bio'],(err,result)=>{
     if(err){
      console.log(err)
     }
     else{
      setCV(result)
     }
   })
    }
    getCV()
    return (
      <View style={styles.container}>
    <Text>Welcome to CV Display</Text>
    <Text>{cvdisplay.fname}</Text>
    <Button    onPress={()=>{
      navigation.navigate('AddCV')
    }} title='Edit CV'/>
    </View>
    )
    
  }
  export default CVDisplay
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'start',
    },
   
  });