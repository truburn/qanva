import { createStyles, ThemeProps } from "utils/theme";

export const storyStyles = createStyles("StoryBook", (theme: ThemeProps) => ({
  title: {
    fontFamily: theme.font.main,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.base.main,
  },
  section: {
    padding: "1rem",
    margin: "1rem 0",
    borderStyle: "solid",
    borderColor: theme.color.base.border,
    borderWidth: 0,
    borderBottomWidth: 1,
    "&:last-of-type": {
      borderBottomWidth: 0,
    },
  },
}));
