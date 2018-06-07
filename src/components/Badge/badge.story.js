import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";

import React from "react";
import Badge from "./index";

const BadgeExample = () => {
  return <Badge value={123} />;
};

storiesOf("Badge", module).add("basic", withInfo()(BadgeExample));

export default BadgeExample;
