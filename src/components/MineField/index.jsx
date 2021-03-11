import React from "react";
import { View } from "react-native";
import Field from "../Field";
import { mineFieldStyle } from "./styles";

export default ({ board }) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return <Field {...field} key={c} />;
    });
    return <View key={r}>{columns}</View>;
  });
  return <View style={mineFieldStyle.container}>{rows}</View>;
};
