import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import H5 from "../H5";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <H5>Text</H5>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
