import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import Button from "./index";
import { View } from "react-native";

const btnStyle = { margin: 3 };

const Example = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Button type="success" iconName="md-cloud-download" style={btnStyle}>
        Success
      </Button>
      <Button type="danger" style={btnStyle}>
        Danger
      </Button>
      <Button style={btnStyle}>Primary</Button>

      <Button type="success" disabled style={btnStyle}>
        Disabled Primary
      </Button>
    </View>
  );
};

storiesOf("Button", module).add("default", withInfo()(Example));

export default Example;
