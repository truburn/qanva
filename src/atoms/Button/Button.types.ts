import { ReactElement } from "react";
import { AriaButtonProps } from "react-aria";
import { ColorPreset } from "utils/theme";

export interface ButtonProps extends AriaButtonProps {
  /**
   * Text to display inside the button and used as the `aria-label` unless it is defined.
   * If `iconOnly = true`, the label is used as the tooltip unless `tooltip` is defined.
   */
  label: string;
  /** Display only the icon */
  iconOnly?: boolean;
  /**
   * Icon to display in the button. If `iconOnly = true`, this field is required. Otherwise,
   * the icon will be displayed before the label.
   */
  icon?: ReactElement;
  /** Icon to display after the label. If `iconOnly = true`, this field is ignored. */
  iconAfter?: ReactElement;
  /** Content to display as a tooltip when the button is hovered. */
  tooltip?: ReactElement;
  /** Button style variation. */
  variant?: ButtonVariant;
  /** Additional class to apply to the button. */
  className?: string;
  /** Theme color name to apply to the button. */
  color?: ColorPreset;
  /**
   * Instructions on how to style the corners of the button. If `rounded`, the button will use
   * the theme's border radius setting.
   */
  roundCorners?: "pill" | "rounded";
}

export enum ButtonVariant {
  FILLED = "filled",
  OUTLINE = "outline",
  TEXT = "text",
}
