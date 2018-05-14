import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import Switcher from "./index";
import Button from "../Button";

import { View } from "react-native";

const Example = () => {
  const btnStyle = { margin: 10, borderRadius: 5 };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Switcher>
        <Button value="mute" iconName="md-volume-off" style={btnStyle} />
        <Button value="walk" iconName="md-walk" style={btnStyle} />
        <Button value="wine" iconName="md-wine" style={btnStyle} />
      </Switcher>
    </View>
  );
};

storiesOf("Switcher", module).add("default", withInfo()(Example));

export default Example;
