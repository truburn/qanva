import { ReactElement, useMemo, createElement } from "react";
import { storyStyles } from "storybook/storyStyles";
import { classist } from "utils/theme";

export interface StoryHeaderProps {
  children: ReactElement | string;
  depth?: number;
}

export const StoryHeader = (props: StoryHeaderProps) => {
  const { children, depth = 1 } = props;
  const classes = storyStyles();
  const tag = useMemo<string>(() => {
    return `h${depth}`;
  }, [depth]);

  if (!children) return null;

  return createElement(tag, { className: classist([classes.title]), children });
};

export default StoryHeader;
