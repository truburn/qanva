import React, { ReactElement } from "react";
import { buttonStyles } from "library/Button";

interface ButtonProps {
  children?: ReactElement;
}

/**
 * Button element using React Aria
 */
export const Button = (props: ButtonProps) => {
  const classes = buttonStyles();
  return <div className={classes.root}>Button</div>;
};

export default Button;
