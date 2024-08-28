import { createSlice } from "@reduxjs/toolkit";

//For persistance
const initialState = {
  items: JSON.parse(localStorage.getItem("items"))
    ? JSON.parse(localStorage.getItem("items"))
    : [],
  completeItems: JSON.parse(localStorage.getItem("completeItems"))
    ? JSON.parse(localStorage.getItem("completeItems"))
    : [],
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
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    deleteTask(state, action) {
      state.items = state.items.filter((task) => task.id !== action.payload);
      localStorage.setItem("items", JSON.stringify(state.items));
    },
    addCompleteTasks(state, action) {
      const taskToComplete = state.items.find(
        (task) => task.id === action.payload
      );
      if (taskToComplete) {
        state.items = state.items.filter((task) => task.id !== action.payload);
        state.completeItems.push(taskToComplete);
        localStorage.setItem(
          "completeItems",
          JSON.stringify(state.completeItems)
        );
        localStorage.setItem("items", JSON.stringify(state.items));
      }
    },
    removeCompleteTask(state, action) {
      const Removetask = state.completeItems.find(
        (task) => task.id === action.payload
      );
      if (Removetask) {
        state.items.push(Removetask);
        state.completeItems = state.completeItems.filter(
          (task) => task.id !== action.payload
        );
        localStorage.setItem(
          "completeItems",
          JSON.stringify(state.completeItems)
        );
        localStorage.setItem("items", JSON.stringify(state.items));
      }
    },
  },
});

export const { addTask, deleteTask, addCompleteTasks, removeCompleteTask } =
  taskSlice.actions;
export default taskSlice.reducer;
