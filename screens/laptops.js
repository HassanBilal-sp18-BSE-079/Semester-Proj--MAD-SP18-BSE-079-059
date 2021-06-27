import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View,ImageBackground } from 'react-native' ;
import ProductCard from '../components/card';
import background from '../assets/background.jpg'



export default function Laptops({navigation}) {


  let Products =[
  {title:'acer Preditor', price:'Price: 3,20,000 Rs', imgUrl: require("../assets/laptop1.jpg"),description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' ,key:'1'},
  {title:'Alien Ware', price:'Price: 2,30,000 Rs',imgUrl: require("../assets/laptop2.jpg"),description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'  ,key:'2'},
  {title:'Dell precision', price:'Price: 50,000 Rs',imgUrl: require("../assets/laptop3.jpg"),description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' ,key:'3'},
];

  return (
    <ImageBackground style={styles.background} source={background}>
    <View style={styles.container}>
      <Text style={styles.text}>Laptops</Text>
      <FlatList
        data={Products}
        renderItem={({item})=>{
          return(
            <TouchableOpacity style={styles.list} onPress={() => navigation.navigate("ProductView", {item})}>
          <ProductCard title={item.title} price={item.price} ImageSource={item.imgUrl}   />
          </TouchableOpacity>
          )}}
      />
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 5,
    
  },
  background:{
    flex:1
  },
  list:{
    flex: 0.5,
    flexDirection:'column',
    alignItems:'center'

  },
  text:{
    textAlign:'center',
    fontSize: 30,
    backgroundColor:'#eee',
    padding:10
  },
});
