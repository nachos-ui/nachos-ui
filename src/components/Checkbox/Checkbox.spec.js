import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Checkbox from "../Checkbox";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Checkbox checked />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render disabled", () => {
  const wrapper = renderer.create(<Checkbox disabled />);
  const tree = wrapper.toJSON();
  expect(tree).toMatchSnapshot();
});
