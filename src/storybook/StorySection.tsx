import { storyStyles } from "storybook/storyStyles";

export const StorySection = (props: any) => {
  const classes = storyStyles();

  return <section className={classes.section}>{props.children}</section>;
};

export default StorySection;
