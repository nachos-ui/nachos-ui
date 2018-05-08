import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import H2 from "../H2";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <H2>Text</H2>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
