import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import H3 from "../H3";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <H3>Text</H3>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
