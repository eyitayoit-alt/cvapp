import { StatusBar } from 'expo-status-bar';

import React,{useState,useEffect,useContext} from 'react';
import {Text,ScrollView,Button,View,TextInput,StyleSheet} from 'react-native';
import { CVContext } from './App';

const CVEdit=({navigation})=>{
    const cvContent=useContext(CVContext)
    
    
    
     return(
    
      <ScrollView style={styles.scrollviewstyle}>
        <View>
      <Text style={styles.title}>Edit CV</Text>
      </View>
      <View style={styles.cvedit}>
         <Text style={styles.textstyle}>Fullname</Text>
        <TextInput   style={styles.input} 
         onChangeText={(value)=>{cvContent.setName(value) }}  value={cvContent.fname}  placeholder='Name' />
         <Text style={styles.textstyle}>Slackname</Text>
        <TextInput  
        style={styles.input}    
        onChangeText={(value)=>{cvContent.setSlackName(value)}} value={cvContent.slackname}  placeholder='Slackname' />
    <Text style={styles.textstyle}>Github Profile</Text>
    <TextInput  
    style={styles.input}    
    onChangeText={(value)=>{cvContent.setGithub(value)}}  value={cvContent.github}  placeholder='Github' />
    <Text style={styles.textstyle}>Bio</Text>
    <TextInput  style={styles.textAreaStyle} 
    multiline={true}
    numberOfLines={40}
    maxLength={200}     
    onChangeText={(value)=>{cvContent.setBio(value)}}  
    value={cvContent.bio}  
    placeholder='Bio' />
    </View>
    <View style={styles.butcontainer}>
    <Button   onPress={()=>{ navigation.navigate('Home')}} title='Submit' color={'#f01d1d'}/>
      </View>
     </ScrollView> 
     )
      
    }

    export default CVEdit
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
        scrollviewstyle:{
            flex: 1,
            flexDirection:'column',
            rowGap:20,
        },
        input: {
          height: 40,
          marginTop:12,
          marginBottom:12,
          borderWidth: 1,
          padding: 10,
        },
        textAreaStyle:{
            height: 100,
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
      