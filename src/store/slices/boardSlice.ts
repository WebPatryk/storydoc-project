import { createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types";
import { Logo } from "@/assets/icons";
import { log } from "console";

const initialState: BoardInterface | Record<string, never> = {
  lists: [{ id: crypto.randomUUID(), logo: "Logo", title: "Example" }],
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOARD":
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    case "DELETE_BOARD":
      return {
        ...state,
        lists: state.lists.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard(state, action) {
      state.lists.push(action.payload);
    },
    deleteBoard(state, action) {
      const id = action.payload;
      state.lists = state.lists.filter((item) => item.id !== id);

      // state.lists = state.lists.filter((obj) => obj.id !== id);
    },
    updateBoard(state, action) {
      // const { id, newValue } = action.payload;
      // const objectToUpdate = state.list.filter(item.id === id);
      // if (objectToUpdate) {
      //   objectToUpdate.list = newValue;
      // }
    },
  },
});

// const addBoard = (text) => {
//   return {
//     type: "ADD_BOARD",
//     payload: {
//       logo: "",
//       title: text,
//     },
//   };
// };
//
// const deleteBoard = (id) => {
//   return {
//     type: "DELETE_TASK",
//     payload: id,
//   };
// };

export const { addBoard, deleteBoard, updateBoard } = boardSlice.actions;
