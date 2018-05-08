import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Em from "../Em";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Em>Text</Em>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
