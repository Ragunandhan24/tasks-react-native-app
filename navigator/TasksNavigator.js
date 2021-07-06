import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CompletedTasksScreen from "../screens/CompletedTasksScreen";
import PendingTasksScreen from "../screens/PendingTasksScreen";
import { enableScreens } from "react-native-screens";
import Colors from "../constants/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheckCircle, faClipboard } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { Platform } from "react-native";

enableScreens();

const tabScreens = {
  Pending: {
    screen: PendingTasksScreen,
    navigationOptions: {
      tabBarColor: Colors.pastelRed,
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesomeIcon
            icon={faClipboard}
            size={20}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
  Completed: {
    screen: CompletedTasksScreen,
    navigationOptions: {
      tabBarColor: Colors.pastelGreen,
      tabBarIcon: (tabInfo) => {
        return (
          <FontAwesomeIcon
            icon={faCheckCircle}
            size={20}
            color={tabInfo.tintColor}
          />
        );
      },
    },
  },
};

const TasksNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreens, {
        activeColorLight: Colors.midnightBlue,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreens, {
        tabBarOptions: {
          activeTintColor: Colors.midnightBlue,
        },
      });

export default createAppContainer(TasksNavigator);
