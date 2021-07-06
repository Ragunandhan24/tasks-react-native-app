import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { deleteTask, toggleDone } from "../reducers/tasksReducer";

const TaskItem = (props) => {
  const { taskObject } = props;
  const { key, isCompleted, value } = taskObject;
  const dispatch = useDispatch();

  const checkboxStateHandle = (isChecked) => {
    dispatch(
      toggleDone({
        key,
        task: { ...taskObject, isCompleted: isChecked },
      })
    );
  };

  return (
    <TouchableOpacity activeOpacity={1}>
      <View style={styles.screen}>
        <View style={styles.list}>
          <BouncyCheckbox
            size={30}
            fillColor={Colors.addButtonColor}
            iconStyle={styles.checkBoxIcon}
            isChecked={isCompleted}
            onPress={(isChecked) => checkboxStateHandle(isChecked)}
          />
          <Text style={[styles.textStyle, isCompleted && styles.strikedText]}>
            {value}
          </Text>
          <TouchableOpacity onPress={() => dispatch(deleteTask(key))}>
            <View style={styles.fontIconContainer}>
              <FontAwesomeIcon
                icon={faTrash}
                color={Colors.deepPink}
                size={20}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 20,
    backgroundColor: Colors.midnightBlue,
    borderRadius: 20,
    marginVertical: 2,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 10,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkBoxIcon: { borderColor: Colors.addButtonColor, borderWidth: 2 },

  textStyle: {
    color: "white",
    fontSize: 15,
    width: "100%",
    maxWidth: "78%",
    textAlign: "left",
    paddingRight: 25,
  },
  strikedText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

export default TaskItem;
