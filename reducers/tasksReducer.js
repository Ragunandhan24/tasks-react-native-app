import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    username: "",
    tasks: [],
    value: 0,
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
  },
});

export const getValue = (state) => state.tasks.value;
export const getAllTasks = (state) => state.tasks.tasks;
export const getPendingTasks = (state) =>
  state.tasks.tasks.filter((task) => !task.isCompleted);
export const getCompletedTasks = (state) =>
  state.tasks.tasks.filter((task) => task.isCompleted);

export const { deleteTask, addTask, toggleDone } = tasksSlice.actions;

export default tasksSlice.reducer;
