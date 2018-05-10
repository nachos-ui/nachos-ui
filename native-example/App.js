import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { Slider } from "nachos-ui";
import NachosApp from "../example/App";
console.log(NachosApp);

export default class App extends React.Component {
  render() {
    return <NachosApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
