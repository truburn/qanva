import { createUseStyles } from "react-jss";

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
}

export enum FontFamily {
  MAIN = `'Quicksand', sans-serif`,
  HEADER = `'Rock Salt', cursive`,
  HANDWRITING = `'Nothing You Could Do', cursive`,
}

export enum FontWeight {
  THIN = 300,
  REGULAR = 500,
  BOLD = 700,
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
};

/**
 * Global styles to apply to the entire application
 */
const useGlobalStyles = createUseStyles((theme: ThemeProps) => ({
  "@global": {
    body: {
      width: "100%",
      height: "100%",
      fontFamily: FontFamily.MAIN,
      fontWeight: FontWeight.REGULAR,
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
      fontFamily: FontFamily.HEADER,
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
