import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Flag from "../Flag";
import { headerStyles } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default ({ onFlagPress, flagsLeft, onNewGame }) => {
  return (
    <View style={headerStyles.container}>
      <View style={headerStyles.flagContainer}>
        <TouchableOpacity onPress={onFlagPress} style={headerStyles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={headerStyles.flagsLeft}> = {flagsLeft}</Text>
      </View>
      <TouchableOpacity style={headerStyles.button} onPress={onNewGame}>
        <Text style={headerStyles.buttonLabel}>
          <MaterialCommunityIcons name="restart" size={20} color="#DDD" />
          Reiniciar
        </Text>
      </TouchableOpacity>
    </View>
  );
};
