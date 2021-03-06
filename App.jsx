import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert } from "react-native";

import params from "./src/params";
import MineField from "./src/components/MineField";
import Header from "./src/components/Header";
import LevelSelection from "./src/screens/LevelSelection";
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  usedFlags,
} from "./src/functions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.createState();
  }

  minesAmount = () => {
    const cols = params.getColumsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  createState = () => {
    const cols = params.getColumsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    };
  };

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert("Perdeu", "Aperte OK para iniciar um novo jogo.", [
        {
          text: "Cancel",
          cancelable: true,
        },
        {
          text: "Ok",
          onPress: () => this.setState(this.createState()),
          style: "ok",
        },
      ]);
    }

    if (won) {
      Alert.alert("Ganhou", "Aperte OK para iniciar um novo jogo.", [
        {
          text: "Cancel",
          cancelable: true,
        },
        {
          text: "Ok",
          onPress: () => this.setState(this.createState()),
          style: "ok",
        },
      ]);
    }

    this.setState({ board, lost, won });
  };

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert("Ganhou", "Aperte OK para iniciar um novo jogo.", [
        {
          text: "Cancel",
          cancelable: true,
        },
        {
          text: "Ok",
          onPress: () => this.setState(this.createState()),
          style: "ok",
        },
      ]);
    }

    this.setState({ board, won });
  };

  onLevelSelected = (level) => {
    params.difficultLevel = level;
    this.setState(this.createState());
  };

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection
          isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })}
        />
        <Header
          flagsLeft={this.minesAmount() - usedFlags(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })}
        />
        <View style={styles.board}>
          <MineField
            board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
          />
        </View>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA",
  },
});
