import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './../screens/home';
import ProductView from './../screens/ProductView';
import {MaterialIcons} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';




const HomeStack = createStackNavigator();

export default ({navigation}) =>{
    return(
    
        <HomeStack.Navigator>
            <HomeStack.Screen name='HomeScreen' component={Home} options={
                {title:'TeckShek',
                headerTitleAlign:'center',
                headerStyle: { backgroundColor: '#344955' ,height: 100},
                headerTintColor:'white',headerLeft:()=>{
                    return(
                        <MaterialIcons name='menu' size={28} onPress={()=>{navigation.openDrawer();}} style={styles.icon}/>
                    )
                }}
                }/>
            <HomeStack.Screen name='ProductView'
             component={ProductView} 
             options={
                 {title:'TeckShek',
                 headerTitleAlign:'center',
                 headerStyle: { backgroundColor: '#344955' ,height: 100},
                 headerTintColor:'white'}}/>
        </HomeStack.Navigator>
   
    )
}





const styles = StyleSheet.create({
 icon:{
     marginLeft:10,
     color:'white'
 }
  
});
