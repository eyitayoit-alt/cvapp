import React,{useState} from 'react';
import {Text, Image,Button,View,TextInput,StyleSheet,AsyncStorage} from 'react-native';
 
 
const CVEdit=({navigation})=>{
const[details,setDetails]=useState({'fname':'','slackname':' ','github':' ','bio':''})
 
  const submitCV=()=>{
   AsyncStorage.multiSet(details.entries(),(err)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log('Succesful')
    }
   })
   
  }
 return(
  <>
  <View style={styles.container}>
  <Text >Welcome to CV edit</Text>
  </View>
  <View style={styles.cvedit}>
   
    <TextInput   style={styles.input} 
     onChangeText={(value)=>{setDetails({...details,['fname']:value}) }}  value={details.fname}  placeholder='Name' />
    <TextInput  
    style={styles.input}    
    onChangeText={(value)=>{setDetails({...details,['slackname']:value})  }} value={details.slackname}  placeholder='Slackname' />
<TextInput  
style={styles.input}    
onChangeText={(value)=>{setDetails({...details,['github']:value}) }}  value={details.github}  placeholder='Github' />
<TextInput   
multiline={true}
numberOfLines={10}
maxLength={40} style={styles.input}    
onChangeText={(value)=>{setDetails({...details,['bio']:value}) }}  
value={details.bio}  
placeholder='Bio' />

<Button  style={styles.buttonstyle} onPress={submitCV} title='Submit'/>
  </View>
  </>
 )
  
}
export default CVEdit