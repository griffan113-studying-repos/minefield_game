import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import params from "./src/params";
import Field from "./src/components/Field";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.welcome}>Iniciando o MineField!</Text>
      <Text style={styles.introcdution}>
        Tamanho da grade: {params.getRowsAmount()}x {params.getColumsAmount()}y
      </Text>
      <Field />
      <Field opened nearMines={4} />
      <Field mined />
      <Field mined opened />
      <Field mined opened exploded />
      <Field flagged />
      <Field flagged opened />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
