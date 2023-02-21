import { useRef, useMemo } from "react";
import { useButton } from "react-aria";
import uniqueId from "lodash/uniqueId";
import { buttonStyles, ButtonProps } from "atoms/Button";
import { classist } from "utils/theme";

/**
 * Button element using React Aria
 */
export const Button = (_props: ButtonProps) => {
  const { variant, className, label, color, id, icon, iconAfter, iconOnly, ...props } = _props;
  const btnRef = useRef(null);
  const classes = buttonStyles(_props);
  const { buttonProps } = useButton(props, btnRef);

  const btnID = useMemo<string>(() => {
    return id ?? uniqueId("button_");
  }, [id]);

  return (
    <button
      {...buttonProps}
      ref={btnRef}
      className={classist([classes.root, className])}
      id={btnID}
      data-testid={btnID}
    >
      {icon}
      {!iconOnly && (
        <>
          <span>{label}</span>
          {iconAfter}
        </>
      )}
    </button>
  );
};

export default Button;
