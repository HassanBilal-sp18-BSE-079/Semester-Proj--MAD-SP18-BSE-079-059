import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button } from 'react-native' ;
import background from '../assets/background.jpg'




export default function ProductView({route}) {
  return (
    <ImageBackground style={styles.background} source={background}>
    <View style={styles.container}>
      <Image source={route.params.item.imgUrl } style={styles.image} />
      <View style={styles.view1}>
      <Text style={styles.Text}>{route.params.item.title}</Text>
      <Text style={styles.Text}>{route.params.item.price}</Text>
      </View>
      <View style={styles.view2}>
      <Text style={styles.Text}>Description:</Text>
      <Text style={styles.description}>{route.params.item.description}</Text>
      </View>
      <Button title='Add to Cart' />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1
    
  },

  background:{
    flex:1,
  },

  image:{
    width:400 ,
    height: 300,
  },

  Text:{
    fontSize: 25
  },

description:{

}  ,
view1:{
marginTop:10,
padding:15
},
view2:{
  marginTop:20,
  padding:15
},

});


