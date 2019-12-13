import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";


const Profile = props => {
  return (
    <View style={styles.screen}>
    <Text>Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Profile;