import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import * as React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import GoalsBoard from './components/screens/ScrumBoard/GoalsBoard';
import Profile from './components/screens/Profile/Profile';
import { configStore } from './store';

const store = configStore();

console.log(store.getState());

state = {
  userId: 1,
  newGoalText: '',
  selectedGoalId: -1,
  goals: []
}

function ToDoList() {
  return <GoalsBoard /> ;
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
        drawerStyle: {
          backgroundColor: '#71856e',
          opacity: 0.95,
        },
      }}
    >
      <Drawer.Screen
        name="ToDoList"
        component={GoalsBoard}
        options={{ drawerLabel: 'ToDoList' }}
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
  state = {
    goals: [],
  }

  return (
    <Provider store = { store }>
      <NavigationContainer  theme={navTheme}>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  );
}