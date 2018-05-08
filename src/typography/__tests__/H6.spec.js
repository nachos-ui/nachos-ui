import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import H6 from "../H6";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <H6>Text</H6>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
