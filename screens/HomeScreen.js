import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import WelcomeHeader from "../components/WelcomeHeader";

import { useDispatch } from "react-redux";
import {
  getNameFromLocalStorage,
  getTasksFromLocalStorage,
} from "../reducers/tasksReducer";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNameFromLocalStorage());
    dispatch(getTasksFromLocalStorage());
  }, []);

  return (
    <View style={styles.container}>
      <WelcomeHeader />
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
