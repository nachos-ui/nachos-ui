import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
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
          iconName="volume-up"
        />
        <SegmentedControlButton value="call" text="Call" iconName="call" />
        <SegmentedControlButton
          value="off"
          text="Volume Off"
          iconName="volume-off"
        />
      </Switcher>
      <br />
      <br />
      <Switcher direction="column">
        <SegmentedControlButton
          value="volume"
          text="Volume"
          iconName="volume-up"
        />
        <SegmentedControlButton value="call" text="Call" iconName="call" />
        <SegmentedControlButton
          value="off"
          text="Volume Off"
          iconName="volume-off"
        />
      </Switcher>
    </View>
  );
};

storiesOf("SegmentedControlButton", module).add("default", withInfo()(Example));

export default Example;
