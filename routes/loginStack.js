import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './../screens/home';
import ProductView from './../screens/ProductView';
import {MaterialIcons} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Login from '../screens/Login';




const LoginStack = createStackNavigator();

export default ({navigation}) =>{
    return(
    
        <LoginStack.Navigator>
            <LoginStack.Screen name='Login' component={Login} options={
                {title:'TeckShek',
                headerTitleAlign:'center',
                headerStyle: { backgroundColor: '#344955' ,height: 100},
                headerTintColor:'white',
                headerTintColor:'white',headerLeft:()=>{
                    return(
                        <MaterialIcons name='menu' size={28} onPress={()=>{navigation.openDrawer();}} style={styles.icon}/>
                    )
                }}}/>
            <LoginStack.Screen name='HomeScreen'
             component={Home} 
             options={
                 {title:'TeckShek',
                 headerTitleAlign:'center',
                 headerStyle: { backgroundColor: '#344955' ,height: 100},
                 headerTintColor:'white'}}/>
        </LoginStack.Navigator>
   
    )
}





const styles = StyleSheet.create({
 icon:{
     marginLeft:10,
     color:'white'
 }
  
});