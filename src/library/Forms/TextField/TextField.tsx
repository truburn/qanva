import React from "react";
import { textFieldStyles } from "library/Forms";

interface ITextFieldProps {}

/**
 * Text input field using React Aria
 */
export const TextField = (props: ITextFieldProps) => {
  const classes = textFieldStyles();
  return <div className={classes.root}>Text Field</div>;
};

export default TextField;
