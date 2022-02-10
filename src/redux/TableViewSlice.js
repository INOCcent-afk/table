import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const tableViewSlice = createSlice({
  name: "tableView",
  initialState,
  reducers: {
    handleSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
  },
});

export const { handleSearch } = tableViewSlice.actions;

export default tableViewSlice.reducer;
