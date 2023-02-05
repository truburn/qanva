import React from "react";
import { appStyles } from "./App.styles";

const App = () => {
  const classes = appStyles();
  return <div className={classes.root}>App Wrapper</div>;
};

export default App;
