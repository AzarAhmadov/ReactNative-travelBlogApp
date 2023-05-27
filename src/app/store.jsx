// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/DarkMode/DarkModeSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
