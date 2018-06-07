import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import H4 from "../H4";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <H4>Text</H4>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
