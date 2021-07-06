import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTasksToLocalStorage = createAsyncThunk(
  "tasks/saveTasks",
  async (payload, { getState }) => {
    try {
      const state = getState();
      await AsyncStorage.setItem("tasks", JSON.stringify(state.tasks.tasks));
    } catch (err) {
      console.log(err);
    }
  }
);

export const saveNameToLocalStorage = createAsyncThunk(
  "tasks/saveName",
  async (payload, { getState }) => {
    try {
      const state = getState();
      await AsyncStorage.setItem(
        "username",
        JSON.stringify(state.tasks.username)
      );
    } catch (err) {
      console.log(err);
    }
  }
);

export const getTasksFromLocalStorage = createAsyncThunk(
  "tasks/getTasks",
  async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("tasks");
      if (JSON.parse(jsonValue)) return JSON.parse(jsonValue);
    } catch (e) {
      console.log("error while fetching saved tasks", e);
    }
  }
);

export const getNameFromLocalStorage = createAsyncThunk(
  "tasks/getName",
  async () => {
    try {
      const response = await AsyncStorage.getItem("username");
      return JSON.parse(response);
    } catch (err) {
      console.log(err);
    }
  }
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    username: "",
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.tasks = action.payload;
        return;
      }
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const key = action.payload;
      state.tasks = state.tasks.filter((task) => task.key !== key);
    },
    toggleDone: (state, action) => {
      let tempArray = [...state.tasks];
      const index = tempArray.findIndex(
        (task) => task.key === action.payload.key
      );
      tempArray.splice(index, 1, { ...action.payload.task });
      state.tasks = tempArray;
    },
    setUserName: (state, action) => {
      state.username = action.payload;
    },
  },
  extraReducers: {
    [saveTasksToLocalStorage.fulfilled]: () => {
      console.log("saved to local storage");
    },
    [saveNameToLocalStorage.fulfilled]: () => {
      console.log("saved name to local storage");
    },
    [getTasksFromLocalStorage.fulfilled]: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.tasks = action.payload;
        return;
      }
      state.tasks.push(action.payload);
    },
    [getNameFromLocalStorage.fulfilled]: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const getAllTasks = (state) => state.tasks.tasks;
export const getPendingTasks = (state) =>
  state.tasks.tasks.filter((task) => !task.isCompleted);
export const getCompletedTasks = (state) =>
  state.tasks.tasks.filter((task) => task.isCompleted);

export const getUserName = (state) => state.tasks.username;

export const { deleteTask, addTask, toggleDone, setUserName } =
  tasksSlice.actions;

export default tasksSlice.reducer;
