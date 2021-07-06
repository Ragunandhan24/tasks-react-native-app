import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";
import { store } from "./store/store";
import TasksNavigator from "./navigator/TasksNavigator";
import HomeScreen from "./screens/HomeScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "montserrat-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "montserrat-light": require("./assets/fonts/Montserrat-Light.ttf"),
    "ubuntu-regular": require("./assets/fonts/Ubuntu-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(e) => {
          console.log(e);
        }}
      />
    );
  }

  return (
    <Provider store={store}>
      <HomeScreen />
      <TasksNavigator />
    </Provider>
  );
}
