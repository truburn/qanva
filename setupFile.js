import { setProjectAnnotations } from "@storybook/testing-react";

// Storybook's preview file location
import * as globalStorybookConfig from "./.storybook/preview";

// Replace with setProjectAnnotations if you are using the new pre-release version the addon
setProjectAnnotations(globalStorybookConfig);
