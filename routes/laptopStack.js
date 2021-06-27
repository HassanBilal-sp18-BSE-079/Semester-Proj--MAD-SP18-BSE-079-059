import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductView from './../screens/ProductView';
import {MaterialIcons} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import Laptops from '../screens/laptops';





const LaptopStack = createStackNavigator();

export default ({navigation}) =>{
    return(
    
        <LaptopStack.Navigator>
            <LaptopStack.Screen name='LaptopScreen' component={Laptops} options={
                {title:'TeckShek',
                headerTitleAlign:'center',
                headerStyle: { backgroundColor: '#344955' ,height: 100},
                headerTintColor:'white',headerLeft:()=>{
                    return(
                        <MaterialIcons name='menu' size={28} onPress={()=>{navigation.openDrawer();}} style={styles.icon}/>
                    )
                }}
                }/>
            <LaptopStack.Screen name='ProductView' component={ProductView} options={{title:'TeckShek',headerTitleAlign:'center',headerStyle: { backgroundColor: '#344955' ,height: 100},headerTintColor:'white'}}/>
        </LaptopStack.Navigator>
   
    )
}





const styles = StyleSheet.create({
 icon:{
     marginLeft:10,
     color:'white'
 }
  
});
