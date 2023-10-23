import { createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types";
import { Logo } from "@/assets/icons";

const initialState: BoardInterface | Record<string, never> = {
  lists: [{ logo: "Logo", title: "Example" }],
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
      console.log(state);
      state.lists.push(action.payload);
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

export const { addBoard } = boardSlice.actions;
