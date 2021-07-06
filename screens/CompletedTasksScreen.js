import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import TaskList from "../components/TaskList";
import Colors from "../constants/Colors";
import SubHeading from "../components/SubHeading";
import { useSelector } from "react-redux";
import { getCompletedTasks } from "../reducers/tasksReducer";

const CompletedTasksScreen = () => {
  const completedTasks = useSelector(getCompletedTasks);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <SubHeading text={`COMPLETED TASK'S - ${completedTasks.length}`} />

        <TaskList taskList={completedTasks} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default CompletedTasksScreen;
