import React from 'react';
import { Text, ImageBackground, StyleSheet } from 'react-native';
import background from '../assets/background.jpg'
import { TextInput,Button } from 'react-native-paper';



export default function Login () {
    return (  
    <ImageBackground style={styles.background} source={background}>
        <Text style={styles.h1}>Login</Text>
        <TextInput style={styles.textInput} label="Email"/>
        <TextInput style={styles.textInput} label="Password" secureTextEntry />
        <Button mode='contained' style={styles.button}>Login</Button>
    </ImageBackground> );
}


const styles = StyleSheet.create({
    
    background:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },


    h1:{
        fontSize:30,
        fontWeight:'bold',
        color:'white',

    },

    textInput:{
        marginTop:20,
    },

    button:{
        marginTop:20,
        width:'40%',
    }
});