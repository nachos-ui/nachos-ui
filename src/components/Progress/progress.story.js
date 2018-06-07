import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Progress from "./index";
import { View } from "react-native";

const Example = () => {
  const progressStyle = { margin: 15 };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Progress progress={0.1} style={progressStyle} />
      <Progress progress={0.5} style={progressStyle} />
    </View>
  );
};

storiesOf("Progress", module).add("default", withInfo()(Example));

export default Example;
