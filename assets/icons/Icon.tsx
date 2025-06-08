/* eslint-disable simple-import-sort/imports */
import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SvgProps } from "react-native-svg";

import { Theme } from "@/constants/Colors";

type IconFunction = React.FC<SvgProps>;

import home_inactive from "@/assets/icons/home-inactive.svg";
import home_active from "@/assets/icons/home.svg";
import profile_active from "@/assets/icons/profile_active.svg";
import profile_inactive from "@/assets/icons/profile_inactive.svg";

export const ICONS = {
  home_active,
  home_inactive,
  profile_active,
  profile_inactive,
};

export type IconName = keyof typeof ICONS;
export type IconProps = SvgProps & {
  name?: IconName;
  size?: number;
  style?: StyleProp<ViewStyle>;
  stroke?: string;
  outerStroke?: string;
  color?: keyof Theme["colors"];
};

/**
 * Custom Icon component based on design systems used in the figma
 */
function Icon({
  name,
  color,
  fill = "none",
  size = 24,
  style,
  ...props
}: IconProps) {
  const IconImpl: IconFunction = ICONS[name as IconName];
  return IconImpl ? (
    <IconImpl
      height={size}
      color={color}
      style={style}
      fill={fill}
      width={size}
      {...props}
    />
  ) : null;
}

export default Icon;
