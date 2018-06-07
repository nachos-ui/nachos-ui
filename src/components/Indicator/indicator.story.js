import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Indicator from "./index";
import { View, Image } from "react-native";

const Example = () => {
  const imageStyle = {
    width: 50,
    height: 50,
    borderRadius: 10
  };
  const indicatorStyle = {
    marginRight: 30
  };
  return (
    <View style={{ flexDirection: "row", marginTop: 15 }}>
      <Indicator position="right top" value="12" style={indicatorStyle}>
        <Image
          style={imageStyle}
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png"
          }}
        />
      </Indicator>
      <Indicator
        position="right top"
        value="2"
        type="success"
        style={indicatorStyle}
      >
        <Image
          style={imageStyle}
          source={{
            uri:
              "https://d3vv6lp55qjaqc.cloudfront.net/items/130d3E0o0E0I31460H0n/Untitled-1.png"
          }}
        />
      </Indicator>
    </View>
  );
};

storiesOf("Indicator", module).add("default", withInfo()(Example));

export default Example;
