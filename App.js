import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Subject from './src/screens/Subject';
import { Image, Text, View } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
        <Stack.Screen options={{
          headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  source={require('./assets/faeterj_logo.png')}
                  style={{ width: 50, height: 50, marginRight: 8 }}
                />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Matérias</Text>
              </View>
            ),
          }} 
          name="Subject" 
          component={Subject} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

