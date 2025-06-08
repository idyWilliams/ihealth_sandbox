import { createText } from "@shopify/restyle";
import { ComponentProps, FC, memo } from "react";

import { Theme } from "@/constants/Colors";

/**
 * Custom `Text` component with type-checked layout stylings and props including typography.
 * All styles can be passed as props rather than using the StyleSheet API, and we can select a variant with predefined styles.
 *
 * Includes all the props that are available in the native `Text` component.
 * Fully themeable.
 * @see https://github.com/Shopify/restyle#text
 */
const RestyleText = createText<Theme>();

export type RestyleTextProps = ComponentProps<typeof RestyleText>;

export type TextProps = RestyleTextProps & {
  fontVariant?: keyof Theme["textVariants"];
};

const Text: FC<TextProps> = ({
  children,
  variant = "medium14",
  color = "black",
  style,
  ...rest
}) => (
  <RestyleText
    allowFontScaling={false}
    variant={variant}
    color={color}
    {...rest}
  >
    {children}
  </RestyleText>
);

export default memo(Text);
