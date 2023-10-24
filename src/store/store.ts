import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "./slices";
import { workspacesSlice } from "@/store/slices";

export const store = configureStore({
  reducer: {
    board: boardSlice.reducer,
    workspaces: workspacesSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
