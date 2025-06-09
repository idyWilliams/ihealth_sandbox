import { JSX, useEffect } from "react";
import { GestureResponderEvent, Pressable as NSPressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Box, { BoxProps } from "../Restyle/Box";

const AnimatedBox = Animated.createAnimatedComponent(Box);

export type PressableProps = BoxProps & {
  children?: React.ReactNode;
  containerStyle?: PressableProps["style"];
  disabled?: boolean;
  longPressDelayMs?: number;
  onLongPress?: (event?: GestureResponderEvent) => void;
  onPress?: () => void;
  opacityLevel?: number;
  scaleValue?: number;
  type?: "no-feedback" | "opacity" | "scale";
};

const config = {
  damping: 7,
  mass: 0.2,
  stiffness: 250,
};

const Pressable = ({
  children,
  containerStyle,
  disabled,
  onLongPress,
  onPress,
  opacityLevel = 0.45,
  ...rest
}: PressableProps): JSX.Element => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(disabled ? 0.7 : 1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  useEffect(() => {
    opacity.value = disabled ? 0.7 : 1;
  }, [disabled]);

  return (
    <NSPressable
      disabled={disabled}
      onPress={() => {
        onPress?.();
      }}
      style={containerStyle}
    >
      <AnimatedBox style={animatedStyle} {...rest}>
        {children}
      </AnimatedBox>
    </NSPressable>
  );
};

export default Pressable;
