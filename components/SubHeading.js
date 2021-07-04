import React from "react";
import { Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";

const SubHeading = (props) => {
  const { text } = props;
  return <Text style={styles.subHeading}>{text}</Text>;
};

const styles = StyleSheet.create({
  subHeading: {
    fontFamily: "montserrat-bold",
    color: Colors.subHeading,
    fontSize: 12,
    paddingLeft: 40,
    paddingTop: 30,
  },
});

export default SubHeading;
