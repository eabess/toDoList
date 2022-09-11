import { Button, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Backlog from './Category/Backlog';
import Done from './Category/Done';
import InProgress from './Category/InProgress';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const bgApp = { uri: 'https://i.pinimg.com/originals/ff/b6/5c/ffb65c935aa5e109144dfa4ccd5e51ff.jpg' };

export default function Category() {
  
  return (
    <>
      <StatusBar style='light'/>
        
        <ImageBackground 
              source={bgApp} 
              style={styles.bgApp}>
          <NavigationContainer >
            <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Backlog') {
                  iconName = 'solution1';
                } else if (route.name === 'In Progress') {
                  iconName = focused ? 'clockcircle' : 'clockcircleo';
                } else if (route.name === 'Done') {
                  iconName = focused ? 'checkcircle' : 'checkcircleo';
                } 
    
                return <AntDesign name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: '#ff0366',
              tabBarInactiveTintColor: '#71856e',
            })}
            >
              <Tab.Screen name='Backlog' component={Backlog} />
              <Tab.Screen name='In Progress' component={InProgress} />
              <Tab.Screen name='Done' component={Done} />
            </Tab.Navigator>
          </NavigationContainer>
        </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  bgApp: {
    flex: 1,
  },
});
