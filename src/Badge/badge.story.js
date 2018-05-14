import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import React from "react";
import { View } from "react-native";
import Badge from "./index";

const BadgeExample = () => {
  return <Badge value={123} />;
};

storiesOf("Badge", module).add("basic", withInfo()(BadgeExample));

export default BadgeExample;
