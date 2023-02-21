import { createStyles, ThemeProps } from "utils/theme";
import { ButtonVariant, ButtonProps } from "atoms/Button";

export const buttonStyles = (props: ButtonProps) => {
  const { color = "base", variant, roundCorners } = props;

  const classes = createStyles("Button", (theme: ThemeProps) => {
    const colorGroup = theme.color[color];
    const btnProps: Record<string, any> = {};
    const btnHover: Record<string, any> = {};

    switch (variant) {
      case ButtonVariant.FILLED:
        btnProps.background = colorGroup.main;
        btnProps.color = colorGroup.contrast;
        btnProps.borderColor = colorGroup.main;
        btnHover.background = colorGroup.dark;
        btnHover.borderColor = colorGroup.dark;
        break;

      case ButtonVariant.OUTLINE:
        btnProps.background = "transparent";
        btnProps.color = colorGroup.main;
        btnHover.background = colorGroup.border;
        break;

      case ButtonVariant.TEXT:
        btnProps.background = "transparent";
        btnProps.color = colorGroup.main;
        btnProps.borderWidth = 0;
        btnProps.padding = `0px 1char`;
        btnProps.margin = 0;
        btnHover.background = colorGroup.border;
        break;
    }

    if (roundCorners === "pill") {
      btnProps.borderRadius = "1.rem";
    }

    if (roundCorners === "rounded") {
      btnProps.borderRadius = theme.border.radius;
    }

    return {
      root: {
        borderStyle: theme.border.style,
        borderWidth: theme.border.width,
        borderColor: "currentcolor",
        borderRadius: 0,
        cursor: "pointer",
        padding: "0.5em 1em",
        margin: "1rem",
        lineHeight: 1,
        fontSize: "inherit",
        transition: "ease all 0.5s",
        ...btnProps,
        "&:hover": {
          ...btnHover,
        },
      },
    };
  });

  return classes();
};
