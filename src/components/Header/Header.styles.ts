import { createStyles, ThemeProps } from "utils/theme";

export const headerStyles = createStyles("Header", (theme: ThemeProps) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "space-between",
    margin: 0,
    padding: "0.5rem 1.5rem",
    background: theme.color.primary.main,
  },
  title: {
    margin: 0,
    padding: "0 0 1.25rem 0",
    color: theme.color.primary.contrast,
    fontSize: "1.25rem",
    lineHeight: 1.25,
  },
}));
