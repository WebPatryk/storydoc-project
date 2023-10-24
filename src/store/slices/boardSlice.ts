import { createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types";
import { Logo } from "@/assets/icons";

const initialState: BoardInterface | Record<string, never> = {
  lists: [{ id: crypto.randomUUID(), logo: "Logo", title: "Example" }],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard(state, action) {
      console.log(state);
      state.lists.push(action.payload);
    },
    deleteBoard(state, action) {
      const id = action.payload;
      state.lists = state.lists.filter((item) => item.id !== id);
    },
    updateBoard(state, action) {
      const { id, newValue } = action.payload;
      const index = state.lists.findIndex((item) => item.id === id);
      const newValueObj = { ...state.lists[index], title: newValue };
      state.lists[index] = newValueObj;
    },
  },
});

export const { addBoard, deleteBoard, updateBoard } = boardSlice.actions;
