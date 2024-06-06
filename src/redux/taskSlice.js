import { createSlice } from "@reduxjs/toolkit";

// Function to load tasks from local storage
const loadTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
}

// Function to save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

const taskSlice = createSlice({
  name: "Task",
  initialState: {
    items: loadTasksFromLocalStorage(),
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
      saveTasksToLocalStorage(state.items);
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload);
      saveTasksToLocalStorage(state.items);
    }
  }
})

export const { addTask, removeTask } = taskSlice.actions;
export default taskSlice.reducer;
