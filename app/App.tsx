import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import containers
import OnboardingContainer from './src/containers/OnboardingContainer';
import CheckInContainer from './src/containers/CheckInContainer';
import SymptomCheckerContainer from './src/containers/SymptomCheckerContainer';
import ClaimFormContainer from './src/containers/ClaimFormContainer';
import ClaimStatusContainer from './src/containers/ClaimStatusContainer';
import ClaimRejectionContainer from './src/containers/ClaimRejectionContainer';
import AccessibilityContextProvider from './src/containers/AccessibilityContextProvider';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Main tab navigator for the core features
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#e0e0e0',
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
      }}
    >
      <Tab.Screen
        name="CheckIn"
        component={CheckInContainer}
        options={{
          title: 'Check-In',
          tabBarIcon: () => '🏠',
        }}
      />
      <Tab.Screen
        name="SymptomChecker"
        component={SymptomCheckerContainer}
        options={{
          title: 'Symptoms',
          tabBarIcon: () => '🩺',
        }}
      />
      <Tab.Screen
        name="ClaimForm"
        component={ClaimFormContainer}
        options={{
          title: 'Submit Claim',
          tabBarIcon: () => '📄',
        }}
      />
      <Tab.Screen
        name="ClaimStatus"
        component={ClaimStatusContainer}
        options={{
          title: 'Status',
          tabBarIcon: () => '📊',
        }}
      />
    </Tab.Navigator>
  );
};

// Main stack navigator including onboarding and special flows
const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#007AFF',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={OnboardingContainer}
        options={{
          title: 'Welcome to BISAcare',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={MainTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ClaimRejection"
        component={ClaimRejectionContainer}
        options={{
          title: 'Claim Appeal',
        }}
      />
    </Stack.Navigator>
  );
};

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <AccessibilityContextProvider>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </AccessibilityContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
