import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Subject from './src/screens/Subject';
import { Image, Text, View } from 'react-native';
import Checklist from './src/screens/Checklist';

const Stack = createStackNavigator();

export default function App() {
  const customHeader = (title) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('./assets/faeterj_logo.png')}
        style={{ width: 50, height: 50, marginRight: 8 }}
      />
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </View>
  )

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen 
          options={{headerTitle: () => customHeader("Matérias")}} 
          name="Subject" 
          component={Subject} 
        />
        <Stack.Screen 
          options={{headerTitle: () => customHeader("Checklist")}} 
          name="Checklist" 
          component={Checklist} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

