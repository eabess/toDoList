import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const bgProfile = { uri: 'https://avatars.mds.yandex.net/get-images-cbir/4328881/JO2CIGyJnLaTKkZIo-2ZSQ2220/ocr' }

function Profile() {
  return (
    <View style={styles.profile}>
      <ImageBackground
        source={ bgProfile }
        resizeMode="cover" 
        style={styles.bgProfile}
      >
      {/* <Text style={styles.profileText}>Profile</Text> */}
        <Image style={styles.imageUser}
          source={require('../../../assets/images/user.png')} />
        <View style={styles.profileInfo}>
          <Text style={styles.userInfo}>First name:</Text>
          <Text style={styles.userInfo}>Last name:</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            android_ripple={{ color: '#ba024a' }} 
            // onPress={() => setModalVisible(!modalVisible)}
          >
            <Text  style={styles.modalText} >Password reset</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  profile: {
    flex: 1,
    backgroundColor: '#71856e',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#a8b8a5',
  },
  imageUser: {
    width: 270,
    height: 270,
    margin: 30,
  },
  userInfo: {
    marginRight: 200,
    fontSize: 22,
  },
  button: {
    marginTop: 10,
    padding: 15,
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
  bgProfile: {
    width: '100%'
  },
})