import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./Goal/GoalInput";
import GoalItem from "./Goal/GoalItem";

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

export default Backlog;

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
  