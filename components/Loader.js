import React from "react";
import styled from "styled-components";
import { BG_COLOR, TINT_COLOR } from "../constans/Color";
import { ActivityIndicator } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${BG_COLOR};
  justify-content: center;
`;

export default () => (
  <Container>
    <ActivityIndicator color={TINT_COLOR} />
  </Container>
);
