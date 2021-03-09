import React from "react";
import { View } from "react-native";

import { mineStyles } from "./styles";

export default (props) => {
  return (
    <View style={mineStyles.container}>
      <View style={mineStyles.coreMine} />
      <View style={mineStyles.line} />
      <View style={[mineStyles.line, { transform: [{ rotate: "45deg" }] }]} />
      <View style={[mineStyles.line, { transform: [{ rotate: "90deg" }] }]} />
      <View style={[mineStyles.line, { transform: [{ rotate: "135deg" }] }]} />
    </View>
  );
};
