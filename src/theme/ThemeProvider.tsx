import * as React from "react";
import { ThemeProvider as OriginalThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { selectTheme } from "./slice/selectors";

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  const theme = useSelector(selectTheme);
  return (
    <OriginalThemeProvider theme={theme}>
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
