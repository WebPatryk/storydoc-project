import { createSlice } from "@reduxjs/toolkit";
import { BoardInterface } from "../types";

const initialState: BoardInterface | Record<string, never> = {
  workspaces: [
    {
      id: 0,
      title: "Working on",
      elements: [
        {
          id: crypto.randomUUID(),
          text: "Create a vide for Acme",
          isEdited: false,
        },
        { id: crypto.randomUUID(), text: "Review Acme PDF", isEdited: false },
      ],
    },
    {
      id: 1,
      title: "Review",
      elements: [
        {
          id: crypto.randomUUID(),
          text: "Create a vide for Acme",
          isEdited: false,
        },
        { id: crypto.randomUUID(), text: "Review Acme PDF", isEdited: false },
      ],
    },
  ],
};

export const workspacesSlice = createSlice({
  name: "workspaces",
  initialState,
  reducers: {
    addTask(state, action) {
      const { index } = action.payload;
      state.workspaces[index].elements.push(action.payload.data);
    },
    deleteTask(state, action) {
      const { id, index } = action.payload;
      state.workspaces[index].elements = state.workspaces[
        index
      ].elements.filter((item) => item.id !== id);
    },
    updateTask(state, action) {
      const { id, newValue } = action.payload;
      const index = state.workspaces[index].elements.findIndex(
        (item) => item.id === id
      );
      const newValueObj = {
        ...state.workspaces[index].elements[index],
        title: newValue,
      };
      state.workspaces[index].elements[index] = newValueObj;
    },
  },
});

export const { addTask, deleteTask, updateTask } = workspacesSlice.actions;
