import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import RadioGroup from "../RadioGroup";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <RadioGroup defaultSelected="gr" options={["Red", "Green", "Blue"]} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
