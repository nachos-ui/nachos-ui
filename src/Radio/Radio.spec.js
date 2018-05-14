import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Radio from "../Radio";

it("should render correctly", () => {
  const component = renderer.create(<Radio />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
