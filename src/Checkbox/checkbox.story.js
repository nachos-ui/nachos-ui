import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import Checkbox from "./index";
import { View } from "react-native";

const Example = () => {
  const checkboxStyle = { margin: 15 };

  return (
    <View style={{ marginVertical: 15 }}>
      <Checkbox style={checkboxStyle} checked={false} />
      <Checkbox style={checkboxStyle} kind="circle" checked={false} />
      <Checkbox style={checkboxStyle} disabled />
    </View>
  );
};

storiesOf("Checkbox", module).add("unchecked", withInfo()(Example));

const CheckedExample = () => {
  const checkboxStyle = { margin: 15 };

  return (
    <View style={{ marginVertical: 15 }}>
      <Checkbox style={checkboxStyle} checked={true} />
      <Checkbox style={checkboxStyle} kind="circle" checked={true} />
      <Checkbox style={checkboxStyle} checked disabled />
    </View>
  );
};

storiesOf("Checkbox", module).add("checked", withInfo()(CheckedExample));

export default Example;
