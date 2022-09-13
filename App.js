// import { NativeModules } from 'react-native';
// NativeModules.DevSettings.setIsDebuggingRemotely(false);

import 'react-native-gesture-handler';
import Category from './components/screens/ScrumBoard/Category';

import * as React from 'react';
import { View, Text } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

function ScrumBoard() {
  return <Category /> ;
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
      useLegacyImplementation initialRouteName="CategoryMenu"
      screenOptions={{
        drawerLabelStyle: {
          color: 'white',
        },
        // drawerActiveBackgroundColor: {
        //   color: '#ff0366',
        // },
        drawerStyle: {
          backgroundColor: '#71856e',
          opacity: 0.95,
        },
      }}
    >
      <Drawer.Screen
        name="ScrumBoard"
        component={Category}
        options={{ drawerLabel: 'ScrumBoard' }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer  theme={navTheme}>
      <MyDrawer />
    </NavigationContainer>
  );
}