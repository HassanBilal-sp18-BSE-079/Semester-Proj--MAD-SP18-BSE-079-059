import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import homeStack from './homeStack';
import DesktopStack from './DesktopStack';
import accessoriesStack from './accessoriesStack';
import laptopStack from './laptopStack';
import AboutUsstack from './AboutUsstack';
import loginStack from './loginStack';
import signupStack from './signupStack';





const Drawer = createDrawerNavigator();

export default () =>{
    return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={loginStack} />
        <Drawer.Screen name="SignUp" component={signupStack} />
        <Drawer.Screen name="Home" component={homeStack} />
        <Drawer.Screen name="Desktop" component={DesktopStack} />
        <Drawer.Screen name="Accessories" component={accessoriesStack} />
        <Drawer.Screen name="Laptops" component={laptopStack} />
        <Drawer.Screen name="AboutUs" component={AboutUsstack} />
      </Drawer.Navigator>
    </NavigationContainer>
    )
}
