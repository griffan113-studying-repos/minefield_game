import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Flag from "../Flag";
import { headerStyles } from "./style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default ({ onFlagPress, flagsLeft, onNewGame }) => {
  return (
    <View style={headerStyles.container}>
      <TouchableOpacity onPress={onFlagPress} style={headerStyles.hamburguer}>
        <Feather name="menu" size={24} color="black" />
      </TouchableOpacity>

      <View style={headerStyles.flagContainer}>
        <View style={headerStyles.flagButton}><Flag bigger /></View>
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
