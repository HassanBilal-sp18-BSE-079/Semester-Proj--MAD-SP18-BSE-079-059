import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Appbar } from 'react-native-paper';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native' ;
import { globalStyles } from './styles/globalStyles';
import Navigation from './routes/Drawer';
import background from './assets/background.jpg'
import Login from './screens/Login';
import LoginStack from './routes/loginStack';

/* Group Members:

	Name: M.Hassan Bilal
	Roll#: Sp18-BSe-079
	Section: B
	
	
	Name: Mohammad Idrees Irfan
	Roll#: Sp18-BSe-059
	Section: B */

export default function App() {
  return (
      <Navigation />
  );
}

