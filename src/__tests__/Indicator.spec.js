import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Indicator from "../Indicator";
import { View } from "react-native";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Indicator position="left top" value="12">
        <View />
      </Indicator>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
