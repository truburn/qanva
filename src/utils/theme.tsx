import React from "react";
import { createUseStyles } from "react-jss";

/**
 * Create styles for a component with named prefix
 * @param name
 * @param styles
 * @param options
 * @returns
 */
export const createStyles = (name: string, styles: any, options?: any) =>
  createUseStyles(styles, { ...options, name });

export interface ColorProps {
  main: string;
  contrast: string;
}
export interface ThemeProps {
  [key: string]: any;
  color: {
    bg: string;
    fg: string;
    primary: ColorProps;
    secondary: ColorProps;
    error: ColorProps;
    success: ColorProps;
    warning: ColorProps;
  };
  font: Record<string, string>;
  fontWeight: Record<string, number | string>;
}

/**
 * Style Theme variables
 */
export const theme: ThemeProps = {
  color: {
    bg: "#FFF6F5",
    fg: "#2F4858",
    primary: {
      main: "#CF002E",
      contrast: "#FFF6F5",
    },
    secondary: {
      main: "#557B97",
      contrast: "#CFF6FF",
    },
    error: {
      main: "#960007",
      contrast: "#FFF6F5",
    },
    success: {
      main: "#317600",
      contrast: "#F3EED9",
    },
    warning: {
      main: "#FF5803",
      contrast: "#FFF5EC",
    },
  },
  font: {
    main: `'Quicksand', sans-serif`,
    header: `'Rock Salt', cursive`,
    handwriting: `'Nothing You Could Do', cursive`,
  },
  fontWeight: {
    thin: 300,
    regular: 500,
    bold: 700,
  },
};

/**
 * Global styles to apply to the entire application
 */
const useGlobalStyles = createUseStyles((theme: ThemeProps) => ({
  "@global": {
    body: {
      width: "100%",
      height: "100%",
      fontFamily: theme.font.main,
      fontWeight: theme.fontWeight.regular,
      margin: 0,
      padding: 0,
      background: theme.color.bg,
      color: theme.color.fg,
    },
    "#root": {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "space-between",
      "& > div, & #page": {
        flex: 1,
        display: "flex",
      },
      "& #page": {
        overflow: "auto",
      },
    },
    "h1, h2, h3": {
      fontFamily: theme.font.header,
      color: theme.color.primary.main,
    },
  },
}));

export const GlobalStyles = () => {
  useGlobalStyles();
  return <></>;
};
