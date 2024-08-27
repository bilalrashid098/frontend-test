import { configureStore } from "@reduxjs/toolkit";
import POST from "./reducers/post/reducer.js";

export const store = configureStore({
  reducer: { POST },
});
