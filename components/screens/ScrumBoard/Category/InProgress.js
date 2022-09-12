// import { StyleSheet, Text, View } from "react-native";

// function InProgress(props) {

//   const [courseGoals, setCourseGoals] = useState([]);
//   // const [goalToMove, ]

//   function deleteGoalHandler(id) {
//     setCourseGoals(( currentCourseGoals ) => {
//       return currentCourseGoals.filter(( goal ) => 
//         goal.id !== id);
//     });
//   }

//   function moveGoalHandler(id, newCategory) {
//     let foundIndex = courseGoals.findIndex(( goal ) => goal.id === id);
//     let goalsToSet = courseGoals;
//     goalsToSet[foundIndex].category = newCategory;
//     setCourseGoals(goalsToSet);  
//   }



//   return (
//     <View style={styles.appContainer}>
//       <View style={styles.golsConteiner}>
//         <FlatList
//           data={courseGoals}
//           renderItem={(itemData) => {
//             return ( 
//               <GoalItem
//                 text={itemData.item.text}
//                 id={itemData.item.id}
//                 onMoveItem={moveGoalHandler}
//               />);
//           }}
//           keyExtractor={(item, index) => {
//             return item.id;
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// export default InProgress;

// const styles = StyleSheet.create({
//     slide3: {},
//     goalText: {},
// })

import { StyleSheet, Text, View } from "react-native";

function InProgress() {
    return (
      <View style={styles.slide2}>
        <Text style={styles.goalText}>2 Slide</Text>
      </View>
    );
  }

export default InProgress;

const styles = StyleSheet.create({
    slide2: {},
    goalText: {},
})