import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "../Theme";

import Progress from "../Progress";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Progress progress={0.5} />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
