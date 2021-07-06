import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { taskList } = props;

  return (
    <View style={styles.taskListView}>
      <FlatList
        data={taskList}
        renderItem={(taskObj) => (
          <TaskItem
            taskObject={taskObj.item}
            keyExtractor={(item) => item.key}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskListView: { paddingTop: 20, width: "100%" },
});

export default TaskList;
