import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import Spinner from "./index";

import { View } from "react-native";

const Example = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Spinner />
    </View>
  );
};

storiesOf("Spinner", module).add("default", withInfo()(Example));

export default Example;
