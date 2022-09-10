import { useState } from 'react';
import { Button, FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Swiper from "react-native-swiper";


import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

const bgApp = { uri: 'https://i.pinimg.com/originals/ff/b6/5c/ffb65c935aa5e109144dfa4ccd5e51ff.jpg' };

function Backlog() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText,
      id: Math.random().toString()},
    ]);
    endAddGoalHandler();
    // setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => 
        goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button 
        title='Add New Goal' 
        color={ '#ba024a' }
        onPress={startAddGoalHandler}
      />
      <GoalInput 
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.golsConteiner}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return ( 
              <GoalItem 
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />);
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

function InProgress() {
  return (
    <View style={styles.slide2}>
      <Text style={styles.goalText}>Second Slide</Text>
    </View>
  );
}

function Done() {
  return (
    <View style={styles.slide3}>
      <Text style={styles.goalText}>3 Slide</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  
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
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 16,
  },
  bgApp: {
    flex: 1,
  },
  golsConteiner: {
    flex: 5,
  }
});
