import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View ,ImageBackground} from 'react-native' ;
import ProductCard from '../components/card';
import background from '../assets/background.jpg'



export default function AboutUs() {

  return (
    <ImageBackground style={styles.background} source={background}>
    <View style={styles.container}>
      <Text style={styles.text}>About Us</Text>
      <View style={styles.view1}>
          <View style={styles.view2}>
              <Text>Name:  M.Hassan Bilal</Text>
              <Text>Roll#:    SP18-BSE-079</Text>
              <Text>Section:    B</Text>
          </View>
          <View style={styles.view3}>
              <Text>Name:  Mohammad Idrees Irfan</Text>
              <Text>Roll#:    SP18-BSE-059</Text>
              <Text>Section:    B</Text>
          </View>
      </View>
      <View style={styles.view4}>
          <Text style={styles.text}>Contact Us</Text>
          <View style={styles.view5}>
              <Text style={styles.contact}>Sp18-BSE-079@cuilahore.edu.pk</Text>
              <Text style={styles.contact}>Sp18-BSE-059@cuilahore.edu.pk</Text>
          </View>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  
    
  },
  background:{
    flex:1,
  },
   text:{
    textAlign:'center',
    fontSize: 30,
    backgroundColor:'#eee',
    padding:10
  },
  view1:{
      flex:0.5,
      flexDirection:'row',
      justifyContent:'space-evenly',
      alignItems:'center',
      


  },
  view2:{
      backgroundColor:'#eee',
      padding:10,
  },
  view3:{
      backgroundColor:'#eee',
      padding:10
  },
    view5:{
      backgroundColor:'#eee',
      padding:10,
      marginTop:20
  },
  contact:{
      textAlign:'center',
      fontSize:23,
      marginTop:10
  }

});
