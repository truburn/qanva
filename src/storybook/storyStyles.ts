import chroma from "chroma-js";
import { createStyles, ThemeProps } from "utils/theme";

export const storyStyles = createStyles("StoryBook", (theme: ThemeProps) => ({
  title: {
    fontFamily: theme.font.main,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.fg,
  },
  section: {
    padding: "1rem",
    margin: "1rem 0",
    borderStyle: "solid",
    borderColor: chroma(theme.color.fg).brighten(3).hex(),
    borderWidth: 0,
    borderBottomWidth: 1,
    "&:last-of-type": {
      borderBottomWidth: 0,
    },
  },
}));
