/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroundName from './Pages/GroundName'
import GroundList from './Pages/GroundList'
import BookingHistory from './Pages/BookingHistory'
import SlotDetails from './Pages/SlotDetails'
import AddNewSlot from './Pages/AddNewSlot'
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
class App extends Component{
  render(){
    return(
     <NavigationContainer>
       <Stack.Navigator initialRouteName="GroundList">
       <Stack.Screen name="GroundName" component={GroundName} options={{headerShown:false}} />
       <Stack.Screen name="GroundList" component={GroundList} options={{headerShown:false}} />
       <Stack.Screen name="BookingHistory" component={BookingHistory} options={{headerShown:false}} />
       <Stack.Screen name="SlotDetails" component={SlotDetails} options={{headerShown:false}} />
       <Stack.Screen name="AddNewSlot" component={AddNewSlot} options={{headerShown:false}} />
       
       </Stack.Navigator>
     </NavigationContainer>
    )
  }
}



export default App;
