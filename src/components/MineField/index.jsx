import React from "react";
import { View } from "react-native";
import Field from "../Field";

import { mineFieldStyle } from "./styles";

export default ({ board, onOpenField, onSelectField }) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => onOpenField(r, c)}
          onSelect={() => onSelectField(r, c)}
        />
      );
    });
    return (
      <View style={{ flexDirection: "row" }} key={r}>
        {columns}
      </View>
    );
  });
  return <View style={mineFieldStyle.container}>{rows}</View>;
};
