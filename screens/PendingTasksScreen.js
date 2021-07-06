import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import Colors from "../constants/Colors";
import SubHeading from "../components/SubHeading";
import { useSelector } from "react-redux";
import { getPendingTasks } from "../reducers/tasksReducer";

const PendingTasksScreen = () => {
  const pendingTasks = useSelector(getPendingTasks);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <SubHeading text={`PENDING TASKS - ${pendingTasks.length}`} />

        <TaskList taskList={pendingTasks} />

        <TaskInput />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.appBackgroundColor,
    flex: 1,
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

export default PendingTasksScreen;
