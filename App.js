import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import TabNavigation from "./navigation/TabNavigation";

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
    <TabNavigation />
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onError={handleError}
      onFinish={handleLoading}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
