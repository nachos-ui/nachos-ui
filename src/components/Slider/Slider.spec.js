import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Slider from "../Slider";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Slider value={0.5} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
