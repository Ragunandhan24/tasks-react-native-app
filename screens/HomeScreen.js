import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import WelcomeHeader from "../components/WelcomeHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

import InputModal from "../components/InputModal";
import InfoModal from "../components/InfoModal";
import { useDispatch, useSelector } from "react-redux";
import { addTask, getAllTasks } from "../reducers/tasksReducer";

const HomeScreen = () => {
  const [openModal, setOpenModal] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [userName, setUserName] = useState("");
  const allTasks = useSelector(getAllTasks);
  const dispatch = useDispatch();

  useEffect(() => {
    getName();
    getSavedTasks();
  }, []);

  const saveName = async (value) => {
    try {
      setUserName(value);
      await AsyncStorage.setItem("username", value);
      setOpenModal(false);
    } catch (e) {
      console.log("error while storing data", e);
    }
  };

  const getSavedTasks = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("taskList");
      if (JSON.parse(jsonValue)) dispatch(addTask(JSON.parse(jsonValue)));
    } catch (e) {
      console.log("error while fetching saved tasks", e);
    }
  };

  const getName = async () => {
    try {
      const value = await AsyncStorage.getItem("username");
      if (value !== null) {
        setUserName(value);
      } else {
        setOpenModal(true);
      }
    } catch (e) {
      console.log("error while fetching data", e);
    }
  };

  const saveList = async () => {
    try {
      await AsyncStorage.setItem("taskList", JSON.stringify(allTasks));
      setSaveModal(true);
    } catch (e) {
      console.log("error while storing data", e);
    }
  };

  return (
    <View style={styles.container}>
      <WelcomeHeader
        name={userName}
        openModal={() => setOpenModal(true)}
        saveList={saveList}
      />
      <InputModal
        openModal={openModal}
        saveValue={saveName}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.appBackgroundColor,
    height: "12%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default HomeScreen;
