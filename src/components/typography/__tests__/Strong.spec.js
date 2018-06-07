import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Strong from "../Strong";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Strong>Text</Strong>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
