import React, { ReactElement } from "react";
import { headerStyles } from "components/Header";

interface IProps {
  children?: ReactElement;
  input?: any;
  buttons?: any[];
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
