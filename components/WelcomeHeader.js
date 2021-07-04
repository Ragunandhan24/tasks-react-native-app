import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen, faSave } from "@fortawesome/free-solid-svg-icons";
import Colors from "../constants/Colors";

const WelcomeHeader = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={[styles.welcomeText, styles.text]}>What's Up,</Text>

      <Text style={[styles.nameText, styles.text]}>{props.name}!</Text>

      <TouchableOpacity onPress={props.openModal}>
        <View style={styles.iconContainer}>
          <FontAwesomeIcon icon={faPen} style={styles.penIcon} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.saveList}>
        <View style={styles.saveIconContainer}>
          <FontAwesomeIcon icon={faSave} style={styles.saveIcon} size={25} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    paddingTop: 20,
    fontFamily: "roboto-bold",
  },
  welcomeText: { paddingLeft: "7%" },
  nameText: {
    paddingLeft: 10,
    textDecorationLine: "underline",
  },
  penIcon: {
    color: Colors.subHeading,
    elevation: 20,
  },
  saveIcon: {
    color: Colors.seaGreen,
    elevation: 20,
  },
  iconContainer: {
    marginTop: 35,
    paddingLeft: 10,
  },
  saveIconContainer: {
    marginTop: 30,
    paddingLeft: 35,
  },
});
export default WelcomeHeader;
