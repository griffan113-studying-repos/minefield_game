import React from "react";
import { View } from "react-native";
import { flagStyles } from "./styles";

export default ({ bigger }) => {
  return (
    <View style={flagStyles.container}>
      <View
        style={[flagStyles.flagPole, bigger ? flagStyles.flagPoleBigger : null]}
      />
      <View style={[flagStyles.flag, bigger ? flagStyles.flagBigger : null]} />
      <View
        style={[flagStyles.base1, bigger ? flagStyles.base1Bigger : null]}
      />
      <View
        style={[flagStyles.base2, bigger ? flagStyles.base2Bigger : null]}
      />
    </View>
  );
};
