import { useState } from 'react';
import { Button, FlatList, ImageBackground, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const bgApp = { uri: 'https://i.pinimg.com/originals/ff/b6/5c/ffb65c935aa5e109144dfa4ccd5e51ff.jpg' };

export default function App() {
  
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
    <>
      <StatusBar style='light'/>
      <ImageBackground 
        source={bgApp} 
        style={styles.bgApp}>
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
