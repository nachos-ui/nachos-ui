import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Bubble from "./index";
import { View } from "react-native";

const Example = () => {
  return (
    <View style={{ marginVertical: 15, flexDirection: "row" }}>
      <Bubble
        arrowPosition="right"
        bubbleStyle={{
          backgroundColor: "#ececee"
        }}
        textStyle={{
          color: "#8a8aa2"
        }}
      >
        What’s cooking?
      </Bubble>
    </View>
  );
};

storiesOf("Bubble", module).add("default", withInfo()(Example));

export default Example;
