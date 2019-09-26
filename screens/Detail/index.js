import React, { useState } from "react";
import { Text } from "react-native";
import Loader from "../../components/Loader";

export default () => {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? <Loader /> : <Text>Movies</Text>;
};
