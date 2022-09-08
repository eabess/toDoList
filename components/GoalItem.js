import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItems}>
      <Pressable 
        android_ripple={{ color: '#ba024a' }} 
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => 
          pressed && styles.pressedItem }>
          <Text style={styles.goalText}>{ props.text }</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#ff0366',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});