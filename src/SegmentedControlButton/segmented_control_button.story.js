import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import SegmentedControlButton from "./index";
import Switcher from "../Switcher";
import { View } from "react-native";

const Example = () => {
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Switcher direction="row">
        <SegmentedControlButton
          value="volume"
          text="Volume"
          iconName="md-volume-off"
        />
        <SegmentedControlButton value="walk" text="Walk" iconName="md-walk" />
        <SegmentedControlButton value="wine" text="Wine" iconName="md-wine" />
      </Switcher>
      <br />
      <br />
      <Switcher direction="column">
        <SegmentedControlButton
          value="volume"
          text="Volume"
          iconName="md-volume-off"
        />
        <SegmentedControlButton value="walk" text="Walk" iconName="md-walk" />
        <SegmentedControlButton value="wine" text="Wine" iconName="md-wine" />
      </Switcher>
    </View>
  );
};

storiesOf("SegmentedControlButton", module).add("default", withInfo()(Example));

export default Example;
