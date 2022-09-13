import { StyleSheet, Text, View } from "react-native";

function Done() {
    return (
      <View style={styles.profile}>
        <Text style={styles.profileText}>Profile</Text>
        <Image style={styles.imageUser}
          source={require('../../../assets/images/user.png')} />
        <Text style={styles.UserInfo}>User name</Text>
      </View>
    );
  }

export default Done;

const styles = StyleSheet.create({
    profile: {},
    profileText: {},
})