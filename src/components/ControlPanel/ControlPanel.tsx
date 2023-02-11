import React from "react";
import { controlPanelStyles } from "components/ControlPanel";

interface IProps {}

/**
 * Panel with controls for the grid settings
 */
export const ControlPanel = (props: IProps) => {
  const classes = controlPanelStyles();
  return (
    <div id="control-panel" className={classes.root}>
      Control Panel
    </div>
  );
};

export default ControlPanel;
