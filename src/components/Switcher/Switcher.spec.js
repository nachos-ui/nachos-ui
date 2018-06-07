import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { View } from "react-native";

import Switcher from "../Switcher";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Switcher defaultSelected="walk">
        <View />
        <View />
      </Switcher>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
