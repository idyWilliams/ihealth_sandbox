import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";
import BottomTabs from "./home/bottomTabs";
import { AppNavRoutes } from "./types";

export type AppNavScreenProps<Screen extends keyof AppNavRoutes> =
  StackScreenProps<AppNavRoutes, Screen>;

const Stack = createStackNavigator<AppNavRoutes>();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenListeners={{}}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current }) => ({
            cardStyle: {
              transform: [
                {
                  scale: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                    extrapolate: "clamp",
                  }),
                },
              ],
              opacity: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          }),
          transitionSpec: {
            open: {
              animation: "spring",
              config: {
                damping: 25,
                mass: 0.9,
                stiffness: 120,
                overshootClamping: true,
                restDisplacementThreshold: 0.001,
                restSpeedThreshold: 0.001,
              },
            },
            close: {
              animation: "timing",
              config: {
                duration: 200,
              },
            },
          },
        }}
      >
        {/* General Stacks */}
        <Stack.Screen component={BottomTabs} name="BottomTabs" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
