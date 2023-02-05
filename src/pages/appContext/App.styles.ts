import { createUseStyles } from "react-jss";

export const appStyles = createUseStyles((theme) => ({
  root: {
    border: "solid 1px",
    color: theme.color,
  },
}));
