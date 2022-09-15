import { useState } from "react";
import { useSelector } from 'react-redux';
import { Button, FlatList, StyleSheet, View } from "react-native";
import { useDispatch } from 'react-redux'

import GoalInput from "./Goal/GoalInput";
import GoalItem from "./Goal/GoalItem";

function GoalsContainer(props) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const goals = useSelector((state) => state.goals.goals);
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);


  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler() {
    dispatch({type: 'ADD_GOAL'});
    endAddGoalHandler();
  }

  function moveGoalHandler(goalId) {
    dispatch({type: 'MOVE_GOAL', payload: goalId});
  }

  function deleteGoalHandler(goalId) {
    dispatch({type: 'DELETE_GOAL', payload: goalId});
  }

  return (
    <View style={styles.appContainer}>
      { props.category === 'Backlog' &&
        <Button 
          title='Add New Goal' 
          color={ '#ba024a' }
          onPress={startAddGoalHandler}
        />
      }
      <GoalInput 
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.golsContainer}>
        <FlatList
          data={state.goals.goals.filter(( goal ) =>
            goal !== undefined && goal.category === props.category)}
          renderItem={(itemData) => {
            return ( 
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
                onMoveItem={moveGoalHandler}
                currentCategory={props.category}
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


export default GoalsContainer;

const styles = StyleSheet.create({
    appContainer: {
      flex: 1,
      paddingTop: 80,
      paddingHorizontal: 16,
    },
    bgApp: {
      flex: 1,
    },
    golsContainer: {
      flex: 5,
    }
  });
  