import React, { useState } from "react";
import { StatusBar } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleError = error => console.log(error);

  const handleLoading = () => setIsLoading(false);

  const loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  return isLoading ? (
    // <View style={styles.container}>
    //   <Text>Loading...</Text>
    // </View>
    <>
      <StatusBar barStyle="light-content" />
      <MainNavigation />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onError={handleError}
      onFinish={handleLoading}
    />
  );
}
