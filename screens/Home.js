import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import InputModal from "../components/InputModal";
import WelcomeHeader from "../components/WelcomeHeader";
import InfoModal from "../components/InfoModal";
import Colors from "../constants/Colors";
import SubHeading from "../components/SubHeading";

const Home = () => {
  const [taskList, setTaskList] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    getData();
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
      if (JSON.parse(jsonValue)) setTaskList(JSON.parse(jsonValue));
    } catch (e) {
      console.log("error while fetching saved tasks", e);
    }
  };

  const getData = async () => {
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

  const addTaskHandler = (enteredTask) => {
    setTaskList((currentList) => [
      ...currentList,
      {
        key: Math.floor(Math.random() * 1000).toString(),
        value: enteredTask,
        isCompleted: false,
      },
    ]);
  };

  const markAsDone = (item) => {
    let tempArray = [...taskList];
    const index = tempArray.findIndex((listItem) => listItem.key === item.key);
    tempArray.splice(index, 1, { ...item });
    setTaskList(tempArray);
  };

  const deleteTask = (key) => {
    setTaskList(taskList.filter((item) => item.key !== key));
  };

  const saveList = async () => {
    try {
      await AsyncStorage.setItem("taskList", JSON.stringify(taskList));
      setSaveModal(true);
    } catch (e) {
      console.log("error while storing data", e);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <WelcomeHeader
          name={userName}
          openModal={() => setOpenModal(true)}
          saveList={saveList}
        />

        <SubHeading
          text={`PENDING TASKS - ${
            taskList.filter((item) => !item.isCompleted).length
          }`}
        />

        <InputModal
          openModal={openModal}
          saveValue={saveName}
          confirmText="SAVE"
          cancelText="CANCEL"
          heading="ENTER YOUR NAME"
          closeModal={() => setOpenModal(false)}
        />

        <TaskList
          taskList={taskList.filter((item) => !item.isCompleted)}
          deleteTask={deleteTask}
          markAsDone={markAsDone}
        />
        <SubHeading
          text={`COMPLETED TASK'S - ${
            taskList.filter((item) => item.isCompleted).length
          }`}
        />

        <TaskList
          taskList={taskList.filter((item) => item.isCompleted)}
          deleteTask={deleteTask}
          markAsDone={markAsDone}
        />

        <InfoModal
          openModal={saveModal}
          closeModal={() => setSaveModal(false)}
          text="SAVED"
          buttonText="OK"
        />
        <TaskInput addTaskHandler={addTaskHandler} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: Colors.appBackgroundColor,
    height: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  subHeading: {
    fontFamily: "montserrat-bold",
    color: Colors.subHeading,
    fontSize: 12,
    paddingLeft: 40,
    paddingTop: 30,
  },
});

export default Home;
