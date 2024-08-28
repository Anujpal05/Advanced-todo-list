import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  completeItems: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: Date.now(),
        text: action.payload,
      };
      state.items.push(newTask);
    },
    deleteTask(state, action) {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
    completeTask(state, action) {
      const taskToComplete = state.items.find(
        (task) => task.id === action.payload
      );
      console.log(action.payload);
      if (taskToComplete) {
        state.items = state.items.filter((task) => task.id !== action.payload);
        state.completeItems.push(taskToComplete);
      }
    },
  },
});

export const { addTask, deleteTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;
