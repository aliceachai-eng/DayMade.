import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import MembershipScreen from './screens/MembershipScreen';
import TaskScreen from './screens/TaskScreen';
import ChatScreen from './screens/ChatScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import OperatorScreen from './screens/OperatorScreen';

const Stack = createStackNavigator();

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      const value = await AsyncStorage.getItem('loggedIn');
      if (value === 'true') setLoggedIn(true);
      setLoading(false);
    };
    checkLogin();
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!loggedIn ? (
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} setLoggedIn={setLoggedIn} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Dashboard" component={DashboardScreen} />
            <Stack.Screen name="Memberships" component={MembershipScreen} />
            <Stack.Screen name="Tasks" component={TaskScreen} />
            <Stack.Screen name="Chat" component={ChatScreen} />
            <Stack.Screen name="Marketplace" component={MarketplaceScreen} />
            <Stack.Screen name="Operator" component={OperatorScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
