import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Card from "./index";
import { View } from "react-native";

const Example = () => {
  const cardStyle = { margin: 15, width: 280 };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <Card
        footerContent="The avocado is a tree that is native to Mexico"
        image="https://upx.cz/BsN"
        style={cardStyle}
      />
      <Card
        footerContent="Agaves are a type of succulent plant from Mexico"
        image="https://upx.cz/BsD"
        style={cardStyle}
      />
    </View>
  );
};

storiesOf("Card", module).add("default", withInfo()(Example));

export default Example;
