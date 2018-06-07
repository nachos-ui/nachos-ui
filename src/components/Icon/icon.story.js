import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Icon, { icons } from "./index";
import { View, Text } from "react-native";

const Example = () => {
  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      {Object.keys(icons).map((icon, i) => (
        <View
          key={icon}
          style={{
            margin: 20,
            padding: 20,
            width: 140,
            backgroundColor: "#f7f7f7"
          }}
        >
          <Icon name={icon} style={{ textAlign: "center" }} />
          <Text style={{ textAlign: "center", marginTop: 10 }}>{icon}</Text>
        </View>
      ))}
    </View>
  );
};

storiesOf("Icon", module).add(
  "default",
  withInfo({ propTablesExclude: [Text, View] })(Example)
);

export default Example;
