import { textFieldStyles } from "atoms/Forms";

export interface TextFieldProps {}

/**
 * Text input field using React Aria
 */
export const TextField = (props: TextFieldProps) => {
  const classes = textFieldStyles();
  return <div className={classes.root}>Text Field</div>;
};

export default TextField;
