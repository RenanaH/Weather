import { createSelector } from "@reduxjs/toolkit";
import { initialState } from ".";
import { RootState } from "../../types";
import { themes } from "../themes";

export const selectTheme = createSelector(
  [(state: RootState) => state.theme || initialState],
  (theme) => {
    return themes["main"];
  }
);

export const selectThemeKey = createSelector(
  [(state: RootState) => state.theme || initialState],
  (theme) => theme.selected
);
