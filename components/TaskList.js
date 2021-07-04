import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = (props) => {
  const { deleteTask, markAsDone, taskList } = props;

  return (
    <View style={styles.taskListView}>
      <FlatList
        data={taskList}
        renderItem={(taskObj) => (
          <TaskItem
            taskObject={taskObj.item}
            deleteTask={deleteTask}
            markAsDone={markAsDone}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  taskListView: { paddingTop: 20, width: "100%", height: "35%" },
});

export default TaskList;
