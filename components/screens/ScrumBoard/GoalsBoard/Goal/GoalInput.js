import { useDispatch, useSelector } from 'react-redux';
import { Button, Image, ImageBackground, Modal, StyleSheet, TextInput, View } from "react-native";

const bgInput = { uri: 'https://i.pinimg.com/originals/7e/72/36/7e7236c57f822b098205e8e64ad94bee.jpg'};

function GoalInput(props) {
  const dispatch = useDispatch();
  const enteredGoalText = useSelector((state) => state.newGoalText);

  function goalInputHandler(enteredText) {
    dispatch({type: 'CHANGE_GOAL_TEXT', payload: enteredText});
  }

  function addGoalHandler() {
    props.onAddGoal();
  }

  return (
    <Modal 
      visible={props.visible} 
      animationType='slide'>
        <ImageBackground 
          source={ bgInput } 
          resizeMode="cover" 
          style={styles.bgInput}>
          <View style={styles.inputContainer}>
            <Image style={styles.image} 
              source={require('../../../../../assets/images/logo_fox.png')} />
            <TextInput 
              style={styles.textInput}
              placeholder='Your course goal!'
              placeholderTextColor='#fae1d7'
              onChangeText={goalInputHandler}  
              value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title='Add Goal'
                  onPress={addGoalHandler}
                  color='#0b1c07'
                />
              </View>
              <View style={styles.button}>
                <Button 
                  title='Cancel'
                  onPress={props.onCancel} 
                  color='#331302'
                />
              </View>
            </View>
          </View>
        </ImageBackground>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({ 
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 120,
    height: 120,
    margin: 20,
  },
  bgInput: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fae1d7',
    width: '100%',
    padding: 13,
    color: '#fcf4f0',
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 15,
  },
});