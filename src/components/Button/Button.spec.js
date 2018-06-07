import "react-native";
import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Button from "../Button";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Button>Submit</Button>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render disabled", () => {
  const component = renderer.create(
    <Provider>
      <Button disabled>Submit</Button>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
