import { useState } from "react";
import { useDispatch } from 'react-redux'
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {

  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  function onMove() {
    props.onMoveItem(props.id);
    setModalVisible(false);
  }

  function onDelete() {
    props.onDeleteItem(props.id);
    setModalVisible(false);
  }

  function onItemPressed() {
    dispatch({type: 'SELECT_GOAL', payload: props.id});
    setModalVisible(true);
  }

  const moveToCategory = props.currentCategory === 'Backlog' ? '"In Progress"' : 'Done';

  return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              { props.currentCategory !== 'Done' &&
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  android_ripple={{ color: '#ba024a' }} 
                  onPress={onMove}
                >
                  <Text style={styles.modalText}>Move to {moveToCategory}</Text>
                </Pressable>
              }
              <Pressable
                style={[styles.button, styles.buttonClose]}
                android_ripple={{ color: '#ba024a' }} 
                onPress={onDelete}
              >
                <Text style={styles.modalText}>Delete</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                android_ripple={{ color: '#ba024a' }} 
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.modalText}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.goalItems}>
          <Pressable
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.goalText}>{ props.text }</Text>
          </Pressable>
        </View>
      </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  wrapper: {},
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: '80%',
    backgroundColor: "#71856e",
    borderRadius: 8,
    padding: '10%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.85,
  },
  button: {
    marginBottom: 8,
    padding: 10,
    paddingHorizontal: 50,
    elevation: 2,
    opacity: 0.9,
  },
  buttonClose: {
    backgroundColor: "#0b1c07",
  },
  modalText: {
    textAlign: "center",
    color: 'white',
  },
});