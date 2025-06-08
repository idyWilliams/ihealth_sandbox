/* eslint-disable no-nested-ternary */
import theme from "@/constants/Colors";
import {
  MaterialBottomTabNavigationEventMap,
  MaterialBottomTabNavigationOptions,
} from "@react-navigation/material-bottom-tabs";
import { MaterialBottomTabNavigationConfig } from "@react-navigation/material-bottom-tabs/lib/typescript/src/types";
import {
  DefaultNavigatorOptions,
  ParamListBase,
  TabNavigationState,
  TabRouterOptions,
  TypedNavigator,
} from "@react-navigation/native";
import React, { JSX } from "react";
import Icon, { IconName } from "@/assets/icons/Icon";
import { Text, Box } from "./Restyle";

export type TabType<K> = {
  tabText: string;
  inactiveTabIcon: IconName;
  name: keyof K;
  svgIconName: IconName;
  component: React.FC;
};

type Props = DefaultNavigatorOptions<
  ParamListBase,
  TabNavigationState<ParamListBase>,
  MaterialBottomTabNavigationOptions,
  MaterialBottomTabNavigationEventMap
> &
  TabRouterOptions &
  MaterialBottomTabNavigationConfig;

type BottomTabPropsType<T extends ParamListBase> = {
  Tab: TypedNavigator<
    T,
    TabNavigationState<ParamListBase>,
    MaterialBottomTabNavigationOptions,
    MaterialBottomTabNavigationEventMap,
    ({
      id,
      backBehavior,
      children,
      screenListeners,
      screenOptions,
      ...rest
    }: Props) => JSX.Element
  >;
  tabList: TabType<T>[];
};

function MainBottomTabs<T extends ParamListBase>({
  Tab,
  tabList,
}: BottomTabPropsType<T>) {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "white",
      }}
      labeled={false}
      sceneAnimationEnabled={false}
      shifting={false}
    >
      {tabList.map((tab, index) => (
        <Tab.Screen
          component={tab.component}
          key={tab.name.toString()}
          name={tab.name}
          options={{
            tabBarIcon: ({ focused }) => (
              <Box alignItems="center" zIndex={-3} justifyContent="center">
                <Box
                  alignItems="center"
                  backgroundColor="white"
                  height={50}
                  justifyContent="center"
                  width={80}
                >
                  <Icon
                    name={focused ? tab.svgIconName : tab.inactiveTabIcon}
                  />
                  <Text
                    color={focused ? "black" : "textTint"}
                    marginTop="md"
                    variant="bold12"
                  >
                    {tab.tabText}
                  </Text>
                </Box>
              </Box>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default MainBottomTabs;
