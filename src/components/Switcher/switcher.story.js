import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Switcher from "./index";
import Button from "../Button";

import { View } from "react-native";

const Example = () => {
  const btnStyle = { margin: 10, borderRadius: 5 };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Switcher>
        <Button value="mute" iconName="volume-off" style={btnStyle} />
        <Button value="walk" iconName="volume-up" style={btnStyle} />
        <Button value="wine" iconName="car" style={btnStyle} />
      </Switcher>
    </View>
  );
};

storiesOf("Switcher", module).add("default", withInfo()(Example));

export default Example;
