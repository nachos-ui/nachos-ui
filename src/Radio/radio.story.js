import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import Radio from "./index";
import Switcher from "../Switcher";

import { View } from "react-native";

const Example = () => {
  const radioStyle = { margin: 10 };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Switcher defaultSelected="bus">
        <Radio value="car" style={radioStyle} />
        <Radio value="bus" style={radioStyle} />
      </Switcher>
    </View>
  );
};

storiesOf("Radio", module).add("default", withInfo()(Example));

export default Example;
