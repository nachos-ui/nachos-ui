import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Badge from "../Badge";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Badge value={4} color="red" />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
