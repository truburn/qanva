import React from "react";
import { DefaultTheme, createUseStyles } from "react-jss";

/**
 * Create styles for a component with named prefix
 * @param name
 * @param styles
 * @param options
 * @returns
 */
export const createStyles = (name: string, styles: any, options?: any) =>
  createUseStyles(styles, { ...options, name });

/**
 * Style Theme variables
 */
export const theme: DefaultTheme = {
  background: "#fafafa",
  fontFamily: `'Quicksand', sans-serif`,
  color: "#CF002E",
};

/**
 * Global styles to apply to the entire application
 */
const useGlobalStyles = createUseStyles({
  "@global": {
    body: {
      width: "100vw",
      height: "100vh",
      fontFamily: `'Quicksand', sans-serif`,
      margin: 0,
      padding: 0,
    },
    "#root": {
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-between",
    },
  },
});

export const GlobalStyles = () => {
  useGlobalStyles();
  return <></>;
};
