import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Bubble from "../Bubble";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Bubble>Hey, What’s Up?</Bubble>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
