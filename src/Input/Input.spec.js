import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Input from "../Input";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Input value="Your name" />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render disabled", () => {
  const component = renderer.create(
    <Provider>
      <Input value="Your name" disabled />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
