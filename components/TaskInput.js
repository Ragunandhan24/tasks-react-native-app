import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import Colors from "../constants/Colors";

const TaskInput = (props) => {
  const [enteredTask, setEnteredTask] = useState("");

  const inputHandler = (enteredText) => {
    setEnteredTask(enteredText);
  };

  const performAddTask = () => {
    props.addTaskHandler(enteredTask);
    setEnteredTask("");
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a Task"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredTask}
          placeholderTextColor={Colors.midnightBlue}
        />
        <TouchableOpacity
          onPress={performAddTask}
          disabled={!enteredTask.length}
        >
          <View
            style={[
              styles.buttonContainer,
              styles.addButton,
              !enteredTask && styles.disabledButton,
            ]}
          >
            <Text style={{ fontSize: 25, color: "white" }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  textInput: {
    borderColor: "#8aa6f3",
    borderWidth: 2,
    padding: 10,
    width: "80%",
    borderRadius: 20,
    color: "black",
    margin: 5,
    backgroundColor: "#8aa6f3",

    elevation: 10,
  },

  buttonContainer: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    height: 50,
    width: 50,
    borderRadius: 100,
    margin: 5,
    justifyContent: "center",
    alignItems: "center",

    elevation: 50,
  },

  addButton: {
    backgroundColor: "#c51de8",
  },

  disabledButton: {
    opacity: 0.6,
  },
});

export default TaskInput;
