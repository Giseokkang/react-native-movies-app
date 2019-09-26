import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailScreen from "../screens/Detail";
import TabNavigation from "./TabNavigation";
import { headerStyles } from "./config";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        header: null
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles
      }
    }
  },
  {
    mode: "card",
    headerBackTitleVisible: false,
    headerMode: "screen"
  }
);

export default createAppContainer(MainNavigation);
