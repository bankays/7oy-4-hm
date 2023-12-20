import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slice/Counter";

const store = configureStore(
  {
    reducer: {
      counterSlice,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
