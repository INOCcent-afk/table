import { configureStore } from "@reduxjs/toolkit";
import tableViewReducer from "./TableViewSlice";

export const store = configureStore({
  reducer: {
    tableView: tableViewReducer,
  },
});
