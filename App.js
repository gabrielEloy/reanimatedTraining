import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Opacity from './src/modules/Opacity';
import Home from './src/modules/Home';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="opacity" component={Opacity} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;