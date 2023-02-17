import React, { ReactElement } from "react";
import { headerStyles } from "components/Header";
import { TextFieldProps } from "library/Forms";
import { ButtonProps } from "library/Button";

interface IProps {
  children?: ReactElement;
  input?: TextFieldProps;
  buttons?: ButtonProps[];
}

/**
 * Common wrapper for application header
 */
export const Header = (props: IProps) => {
  const classes = headerStyles();

  return (
    <header className={classes.root}>
      <h1 className={classes.title}>Qanva</h1>
    </header>
  );
};

export default Header;
