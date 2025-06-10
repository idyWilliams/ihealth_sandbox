import { AboutUs, HomePage } from "@/app/screen";
import MainBottomTabs, { TabType } from "@/components/MainBottomtabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { BottomTabsRoute } from "../types";

const Tab = createMaterialBottomTabNavigator<BottomTabsRoute>();

type TabRoute = {
  HomePage: undefined;
  AboutUs: undefined;
};

const tabList: TabType<TabRoute>[] = [
  {
    component: HomePage,
    inactiveTabIcon: "home_inactive",
    name: "HomePage",
    svgIconName: "home_active",
    tabText: "Home",
  },
  {
    component: AboutUs,
    inactiveTabIcon: "profile_inactive",
    name: "AboutUs",
    svgIconName: "profile_active",
    tabText: "About Us",
  },
];

const BottomTabs = () => (
  <MainBottomTabs<TabRoute> Tab={Tab} tabList={tabList} />
);

export default BottomTabs;
