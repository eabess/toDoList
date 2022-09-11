import { StyleSheet, Text, View } from "react-native";

function InProgress() {
    return (
      <View style={styles.slide2}>
        <Text style={styles.goalText}>Second Slide</Text>
      </View>
    );
  }

export default InProgress;

const styles = StyleSheet.create({
    slide3: {},
    goalText: {},
})