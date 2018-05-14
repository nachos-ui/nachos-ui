import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import SegmentedControlButton from "../SegmentedControlButton";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <SegmentedControlButton text="Feed" />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
