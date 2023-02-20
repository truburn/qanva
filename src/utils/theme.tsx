import { createUseStyles } from "react-jss";
import chroma from "chroma-js";

export enum ColorPreset {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export interface ColorProps {
  main: string;
  contrast: string;
  dark?: string;
  light?: string;
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
  fontWeight: Record<string, number>;
}

/**
 * Combine a list of classnames into a single string
 */
export type ClassistType = Array<string | undefined | Record<string, boolean>>;
export const classist = (classNames: ClassistType = []): string => {
  const classes: string[] = classNames
    .map((val) => {
      if (typeof val === "string") return val;
      if (typeof val === "object") {
        const [name, addToList] = Object.entries(val)[0];
        if (addToList) return name;
      }

      return "";
    })
    .filter((name) => name !== "");

  return classes.join(" ");
};

/**
 * Create styles for a component with named prefix
 * @param name Name to prefix to the classname
 * @param styles Styles to create into classes
 * @param options Additional options to apply to the classes
 * @returns
 */
export const createStyles = (name: string, styles: any, options?: any) =>
  createUseStyles(styles, { ...options, name });

/**
 * Colors
 */
const colorBG = chroma("#FFF6F5");
const colorFG = chroma("#2F4858");
const colorPrimary = chroma("#CF002E");
const colorSecondary = chroma("#557B97");
const colorError = chroma("#960007");
const colorSuccess = chroma("#317600");
const colorWarning = chroma("#FF5803");

/**
 * Style Theme variables
 */
export const theme: ThemeProps = {
  color: {
    bg: colorBG.hex(),
    fg: colorFG.hex(),
    primary: {
      main: colorPrimary.hex(),
      contrast: colorBG.hex(),
      dark: colorPrimary.darken(2).hex(),
      light: colorPrimary.brighten(2).hex(),
    },
    secondary: {
      main: colorSecondary.hex(),
      contrast: "#CFF6FF",
      dark: colorSecondary.darken(2).hex(),
      light: colorSecondary.brighten(2).hex(),
    },
    error: {
      main: colorError.hex(),
      contrast: colorBG.hex(),
      dark: colorError.darken(2).hex(),
      light: colorError.brighten(2).hex(),
    },
    success: {
      main: colorSuccess.hex(),
      contrast: "#F3EED9",
      dark: colorSuccess.darken(2).hex(),
      light: colorSuccess.brighten(2).hex(),
    },
    warning: {
      main: colorWarning.hex(),
      contrast: "#FFF5EC",
      dark: colorWarning.darken(2).hex(),
      light: colorWarning.brighten(2).hex(),
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

/**
 * Empty component to call the global styles hook.
 * Only use once throughout the entire application, preferably at the base.
 */
export const GlobalStyles = () => {
  useGlobalStyles();
  return <></>;
};
