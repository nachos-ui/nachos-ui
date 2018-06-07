import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import RadioGroup from "./index";

import { View } from "react-native";

const Example = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <RadioGroup defaultSelected="Green" options={["Red", "Green", "Blue"]} />
    </View>
  );
};

storiesOf("RadioGroup", module).add("default", withInfo()(Example));

export default Example;
