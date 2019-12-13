import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Card from "../components/Card";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      {/* <Image source={require('../imgs/confetti.jpg')} style={styles.confettiIMG} /> */}
      <Text style={styles.gameOver}>The Game is Over!</Text>
      <Card style={styles.stats}>
        <Text style={styles.individualStat}>
          Number of rounds until correct guess: {props.roundsNumber}
        </Text>
        <Text style={styles.individualStat}>
          Your number was: {props.userNumber}
        </Text>
      </Card>
      <Card>
        <View>
          <Button title="Play again!" onPress={props.onRestart} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center"
  },
  gameOver: {
    color: "crimson",
    fontSize: 25,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20
  },
  stats: {
    width: "80%",
    marginBottom: 20
  },
  individualStat: {
    marginVertical: 10
  },
  confettiIMG: {
    width: "100%",
    height: 200,

    alignContent: "center",
    alignItems: "center"
    // flex: 3
  }
});

export default GameOverScreen;
