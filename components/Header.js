import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Navigator from "./Navigator";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1
  },
  headerTitle: {
    color: "#147efb",
    fontSize: 18
  }
});

export default Header;
