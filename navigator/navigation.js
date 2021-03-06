import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen1 from '../screens/WelcomeScreen1';
import WelcomeScreen2 from '../screens/WelcomeScreen2';
import WelcomeScreen3 from '../screens/WelcomeScreen3';
import WelcomeScreen4 from '../screens/WelcomeScreen4';
import GetStartedScreen from '../screens/GetStartedScreen';
import LoginScreen from '../screens/LoginScreen';
import SomethingWentWrongScreen from '../screens/SomethingWentWrongScreen';
import SomethingWentWrong from '../screens/SomethingWentWrongScreen';


const Stack = createStackNavigator();

function Welcome({navigation}) {
// console.log(routes);
  return (
    <Stack.Navigator
    screenOptions = {{
        headerShown: false
    }}>
        <Stack.Screen name="first" component={WelcomeScreen1} />
        <Stack.Screen name="second" component={WelcomeScreen2} />
        <Stack.Screen name="third" component={WelcomeScreen3} />
        <Stack.Screen name="fourth" component={WelcomeScreen4} />
        <Stack.Screen name="getStarted" component={GetStartedScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="wrong" component={SomethingWentWrong} />
     </Stack.Navigator>
  );
}


export default function WelcomNavigator() {
    return (
      <NavigationContainer>
          <Welcome/>
      </NavigationContainer>
    );
  }

