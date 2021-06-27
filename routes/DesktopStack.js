import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ProductView from './../screens/ProductView';
import Desktop from './../screens/Desktops';
import {MaterialIcons} from '@expo/vector-icons';
import { StyleSheet } from 'react-native';





const DesktopStack = createStackNavigator();

export default ({navigation}) =>{
    return(
    
        <DesktopStack.Navigator>
            <DesktopStack.Screen name='DesktopScreen' component={Desktop} options={
                {title:'TeckShek',
                headerTitleAlign:'center',
                headerStyle: { backgroundColor: '#344955' ,height: 100},
                headerTintColor:'white',headerLeft:()=>{
                    return(
                        <MaterialIcons name='menu' size={28} onPress={()=>{navigation.openDrawer();}} style={styles.icon}/>
                    )
                }}
                }/>
            <DesktopStack.Screen name='ProductView' component={ProductView} options={{title:'TeckShek',headerTitleAlign:'center',headerStyle: { backgroundColor: '#344955' ,height: 100},headerTintColor:'white'}}/>
        </DesktopStack.Navigator>
   
    )
}





const styles = StyleSheet.create({
 icon:{
     marginLeft:10,
     color:'white'
 }
  
});
