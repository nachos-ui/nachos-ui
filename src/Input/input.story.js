import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import Input from "./index";
import { View } from "react-native";

const Example = () => {
  const inputStyle = { margin: 15 };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Input style={inputStyle} placeholder="Your name" />
      <Input style={inputStyle} disabled value="Disabled input" />
      <Input status="warn" style={inputStyle} placeholder="Your name" />
      <Input status="error" style={inputStyle} placeholder="Your name" />
      <Input status="valid" style={inputStyle} placeholder="Your name" />
      <Input icon="ios-beer" style={inputStyle} placeholder="Your name" />
    </View>
  );
};

storiesOf("Input", module).add("default", withInfo()(Example));

export default Example;
