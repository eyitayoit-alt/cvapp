import { StatusBar } from 'expo-status-bar';

import React,{useState,useEffect} from 'react';
import {Text,Linking,Button,View,TextInput,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

const CVDisplay=({navigation})=>{
  const [cvdisplay,setCV]=useState([])
  useEffect(()=>{
    const getCV=()=>{
      AsyncStorage.multiGet(['fname','slackname','github','bio'],(err,result)=>{
        if(err){
         console.log(err)
        }
        else{
         const data=Object.fromEntries(result)
         //const keys=Object.keys(data)
         setCV(data)
     
        }
      })
       }
       getCV()
  },[cvdisplay])
 
  
  return (
    <View style={styles.container}>

  <Text style={styles.title}>CV</Text>
   <View style={styles.cvshow}>
  <Text style={styles.textstyle}>Fullname:{cvdisplay.fname}</Text>
  <Text style={styles.textstyle}>Slackname:{cvdisplay.slackname}</Text>
  <Text style={styles.textstyle} onPress={()=>{Linking.openURL(`${cvdisplay.github}`)}}>Github Profile: {cvdisplay.github}</Text>
  <Text style={styles.textstyle}>Bio:{cvdisplay.bio}</Text>
  </View>
  <View style={styles.butcontainer}>
  <Button  style={styles.buttonstyle}  onPress={()=>{
    navigation.navigate('AddCV')}} title='Edit CV'color={'#f01d1d'}/>
    </View>
  </View>
  )
  
}
const CVEdit=({navigation})=>{
  const[details,setDetails]=useState({'fname':'','slackname':' ','github':' ','bio':''})
  const [cvsubmit,setCVSubmit]=useState('')
  const [dataerror,setError]=useState(false)
  useEffect(()=>{
    const getdetails=()=>{
      AsyncStorage.multiGet(['fname','slackname','github','bio'],(err,result)=>{
        if(err){
         console.log(err)
        }
        else{
         const data=Object.fromEntries(result)
         //const keys=Object.keys(data)
         setDetails(data)
     
        }
      })
     }
     getdetails() 
  },[])
  
 
   
    const submitCV=()=>{
      const data=Object.entries(details)
     AsyncStorage.multiSet(data,(err)=>{
      if(err){
        setError(true)
        setCVSubmit(err)
      }
      else{
        setCVSubmit('CV Succesful Updated')
      }
     })
     
    }
   return(
  
    <View style={styles.container}>
      <View>
    <Text style={styles.title}>Edit CV</Text>
    {dataerror ?<Text style={styles.stylerror}>{cvsubmit}</Text>:<Text style={styles.stylesuccess}>{cvsubmit}</Text>}
    </View>
    <View style={styles.cvedit}>
       <Text style={styles.textstyle}>Fullname</Text>
      <TextInput   style={styles.input} 
       onChangeText={(value)=>{setDetails({...details,['fname']:value}) }}  value={details.fname}  placeholder='Name' />
       <Text style={styles.textstyle}>Slackname</Text>
      <TextInput  
      style={styles.input}    
      onChangeText={(value)=>{setDetails({...details,['slackname']:value})  }} value={details.slackname}  placeholder='Slackname' />
  <Text style={styles.textstyle}>Github Profile</Text>
  <TextInput  
  style={styles.input}    
  onChangeText={(value)=>{setDetails({...details,['github']:value}) }}  value={details.github}  placeholder='Github' />
  <Text style={styles.textstyle}>Bio</Text>
  <TextInput  style={styles.input} 
  multiline={true}
  numberOfLines={40}
  maxLength={200}     
  onChangeText={(value)=>{setDetails({...details,['bio']:value}) }}  
  value={details.bio}  
  placeholder='Bio' />
  </View>
  <View style={styles.butcontainer}>
  <Button   onPress={submitCV} title='Submit' color={'#f01d1d'}/>
    </View>
   </View> 
   )
    
  }

const Stack= createNativeStackNavigator()
const DisplayCV = () => {
  


  return (
   <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen style={styles.screenstyle} name="Home" component={CVDisplay} options={{title:'MY CV'}} />
    <Stack.Screen style={styles.screenstyle} name="AddCV" component={CVEdit} options={{title:'Edit MY CV'}} />
   </Stack.Navigator>

   </NavigationContainer>
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
