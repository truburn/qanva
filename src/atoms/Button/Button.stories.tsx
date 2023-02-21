import type { Meta, StoryObj } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrid4, faPaintbrushPencil } from "@fortawesome/pro-duotone-svg-icons";
import capitalize from "lodash/capitalize";
import { Button, ButtonProps, ButtonVariant } from "atoms/Button";
import { ColorPreset } from "utils/theme";
import { StoryHeader } from "storybook/StoryHeader";
import StorySection from "storybook/StorySection";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Simple text only button */
export const SimpleButton: Story = {
  render,
  args: {
    label: "Simple",
    id: "simple-button",
  },
};

/** Button with icon and label */
export const IconBeforeLabel: Story = {
  render,
  args: {
    label: "Icon Before Label",
    id: "icon-before-label",
    icon: <FontAwesomeIcon icon={faGrid4} />,
  },
};

/** Button with two icons and label */
export const LabelWithTwoIcons: Story = {
  render,
  args: {
    label: "Label with 2 icons",
    id: "label-with-two-icons",
    icon: <FontAwesomeIcon icon={faGrid4} />,
    iconAfter: <FontAwesomeIcon icon={faPaintbrushPencil} />,
  },
};

/** Icon only button */
export const IconButton: Story = {
  render,
  args: {
    label: "Icon Button",
    id: "icon-button",
    icon: <FontAwesomeIcon icon={faGrid4} />,
    iconOnly: true,
  },
};

function render(args: ButtonProps) {
  const { label, id, ...props } = args;

  const corners = ["rounded", "pill"];
  const defaultVariant: ButtonProps[] = Object.values(ColorPreset).map((color) => ({
    ...props,
    label: `color = "${color}"`,
    id: [id, color].join("-"),
    color,
  }));
  defaultVariant.unshift({
    ...props,
    label: `color = undefined`,
    id: "color-undefined",
  });

  const variants = Object.values(ButtonVariant).map((variant) => {
    const children: any[] = corners.map((roundCorners) => ({
      title: `${capitalize(roundCorners)} Corners`,
      buttons: defaultVariant.map((btn) => ({
        ...btn,
        id: [variant, roundCorners, btn.id].join("-"),
        roundCorners,
        variant,
      })),
    }));

    const defaultCorners = defaultVariant.map((btn) => ({
      ...btn,
      id: [variant, btn.id].join("-"),
      variant,
    }));

    children.unshift({ buttons: defaultCorners });

    return {
      title: `${capitalize(variant)} Variant`,
      children,
    };
  });

  return (
    <>
      {variants.map((variant, vID) => (
        <StorySection key={vID}>
          <StoryHeader>{variant.title}</StoryHeader>
          {variant.children.map((child, cID) => (
            <StorySection key={cID}>
              <StoryHeader depth={2}>{child.title}</StoryHeader>
              <div>
                {child.buttons.map((btn: ButtonProps) => (
                  <Button key={btn.id} {...btn} />
                ))}
              </div>
            </StorySection>
          ))}
        </StorySection>
      ))}
    </>
  );
}
