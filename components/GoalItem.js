import { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem(props) {

  const [modalVisible, setModalVisible] = useState(false);

  return (
      <View style={styles.slide1}>
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
              {/* <Text style={styles.modalText}>Hello World!</Text> */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                android_ripple={{ color: '#ba024a' }} 
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.modalText}>Mode</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                android_ripple={{ color: '#ba024a' }} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                // style={({ pressed }) => 
                //   pressed && styles.pressedItem }
              >
                <Text style={styles.modalText}>Delete</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                android_ripple={{ color: '#ba024a' }} 
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.modalText}>Edit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.goalItems}>
          <Pressable
            // style={[styles.buttonOpen]}
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
  slide1: {
    flex: 1,
  },
  slide2: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    // margin: 20,
    width: '80%',
    height: '70%',
    backgroundColor: "#71856e",
    borderRadius: 8,
    paddingHorizontal: '10%',
    paddingTop: '20%',
    // alignItems: "center",
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
    // borderRadius: 20,
    // marginHorizontal: '10%',
    marginBottom: 10,
    // marginTop: '30%',
    padding: 15,
    paddingHorizontal: 40,
    elevation: 2,
    opacity: 0.9,
  },
  // buttonOpen: {
  //   backgroundColor: "#F194FF",
  // },
  buttonClose: {
    backgroundColor: "#0b1c07",
  },
  // textStyle: {
  //   color: "white",
  //   fontWeight: "bold",
  //   textAlign: "center"
  // },
  modalText: {
    // marginBottom: 15,
    textAlign: "center",
    color: 'white',
    // padding: 8,
  },
});