import React from 'react';
import { RouteProp } from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { AppNavigatorParams } from './AppNavigator';
import Route from './routes';

import LoginScreen from '@/screens/loginScreen/LoginScreen';
import RegisterScreen from '@/screens/registerScreen/RegisterScreen';

import { AuthRoutes } from './routes/AuthRoutes';

export type AuthNavigatorParams = AppNavigatorParams & {
  [Route.LOGIN_SCREEN]: undefined;
[Route.REGISTER_SCREEN]: undefined;
};

export interface LoginScreenProps {
    navigation: StackNavigationProp<AuthNavigatorParams, Route.LOGIN_SCREEN>;
    route: RouteProp<AuthNavigatorParams, Route.LOGIN_SCREEN>;
  }
export interface RegisterScreenProps {
    navigation: StackNavigationProp<AuthNavigatorParams, Route.REGISTER_SCREEN>;
    route: RouteProp<AuthNavigatorParams, Route.REGISTER_SCREEN>;
  }

const Stack = createStackNavigator<AuthNavigatorParams>();

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName={Route.LOGIN_SCREEN}
    screenOptions={{
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    }}
  ><Stack.Screen
      name={Route.LOGIN_SCREEN}
      component={LoginScreen}
      options={({route}) => ({
        headerShown: false,
      })}
    />
<Stack.Screen
      name={Route.REGISTER_SCREEN}
      component={RegisterScreen}
      options={({route}) => ({
        headerShown: false,
      })}
    />
  </Stack.Navigator>
);

export default AuthNavigator;