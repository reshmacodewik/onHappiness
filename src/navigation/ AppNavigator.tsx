import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import SplashScreen from '../screens/Welcome/SplashScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ThankYouScreen from '../screens/ThankYouScreen';

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  Thankyou:undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Thankyou" component={ThankYouScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
