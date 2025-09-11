import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider, useUser } from './UserContext';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import LoginScreen from './screens/LogInScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import TasksScreen from './screens/TasksScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator 
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person-outline';
        } else if (route.name === 'Tasks') {
          iconName = 'checkmark-done-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'limegreen',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: { backgroundColor: 'white' },
    })}
  >
    <Tab.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
    <Tab.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
    <Tab.Screen options={{headerShown: false}} name="Tasks" component={TasksScreen} />
  </Tab.Navigator>
);

const App = () => {
  const { user } = useUser();
  const [isUserReady, setIsUserReady] = useState(false);

  useEffect(() => {
    if (user) {
      setIsUserReady(true); 
    }
  }, [user]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? "Main" : "Welcome"}>
        <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="SignIn" component={SignInScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        
        {user && (
          <Stack.Screen
            name="Main"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        )}

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default () => (
  <UserProvider>
    <App />
  </UserProvider>
);
