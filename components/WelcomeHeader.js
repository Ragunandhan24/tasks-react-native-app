import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen, faSave } from "@fortawesome/free-solid-svg-icons";
import Colors from "../constants/Colors";
import { useDispatch, useSelector } from "react-redux";
import { getUserName, saveTasksToLocalStorage } from "../reducers/tasksReducer";
import InputModal from "./InputModal";
import InfoModal from "./InfoModal";

const WelcomeHeader = (props) => {
  const [saveModal, setSaveModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const username = useSelector(getUserName);

  const dispatch = useDispatch();

  const saveList = () => {
    dispatch(saveTasksToLocalStorage());
    setSaveModal(true);
  };

  return (
    <>
      <View style={styles.screen}>
        <Text style={[styles.welcomeText, styles.text]}>What's Up,</Text>

        <Text style={[styles.nameText, styles.text]}>{username}!</Text>

        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faPen} style={styles.penIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={saveList}>
          <View style={styles.saveIconContainer}>
            <FontAwesomeIcon icon={faSave} style={styles.saveIcon} size={25} />
          </View>
        </TouchableOpacity>
      </View>
      <InputModal
        openModal={openModal}
        confirmText="SAVE"
        cancelText="CANCEL"
        heading="ENTER YOUR NAME"
        closeModal={() => setOpenModal(false)}
      />
      <InfoModal
        openModal={saveModal}
        closeModal={() => setSaveModal(false)}
        text="SAVED"
        buttonText="OK"
      />
    </>
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
