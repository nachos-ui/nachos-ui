import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";
import H6 from "./H6";
import Strong from "./Strong";
import Em from "./Em";
import P from "./P";
import I from "./I";
import B from "./B";
import A from "./A";

import { View } from "react-native";

const Example = () => {
  const textStyle = { margin: 15 };

  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <H1 style={textStyle}>Headline 1</H1>
      <H2 style={textStyle}>Headline 2</H2>
      <H3 style={textStyle}>Headline 3</H3>
      <H4 style={textStyle}>Headline 4</H4>
      <H5 style={textStyle}>Headline 5</H5>
      <H6 style={textStyle}>Headline 6</H6>
      <P style={textStyle}>Paragraph of text</P>
      <Strong style={textStyle}>
        Strong tag defines strong emphasized text
      </Strong>
      <B style={textStyle}>B tag specifies bold text</B>
      <Em style={textStyle}>Em tag renders as emphasized text</Em>
      <I style={textStyle}>I tag is usually displayed in italic</I>
      <A style={textStyle} href="http://avocode.com">
        This is a link
      </A>
    </View>
  );
};

storiesOf("Typography", module).add("default", withInfo()(Example));

export default Example;
