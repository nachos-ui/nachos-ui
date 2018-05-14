import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import Slider from "./index";

import { View } from "react-native";

const Example = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Slider value={0.4} />
    </View>
  );
};

storiesOf("Slider", module).add("default", withInfo()(Example));

export default Example;
