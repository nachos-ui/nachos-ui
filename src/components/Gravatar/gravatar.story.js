import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Gravatar from "./index";
import { View } from "react-native";

const Example = () => {
  const gravatarStyle = {
    margin: 15
  };
  return (
    <View>
      <Gravatar email="blah@blah.com" style={gravatarStyle} />
      <Gravatar
        email="blahblah@blah.com"
        size={150}
        rating="pg"
        default="retro"
        style={gravatarStyle}
      />
      <Gravatar
        md5="313cbdb52db5b6bb6b3f14bc4ddae461"
        size={100}
        circle
        style={gravatarStyle}
      />
    </View>
  );
};

storiesOf("Gravatar", module).add("default", withInfo()(Example));

export default Example;
