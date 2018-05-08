import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import H1 from "../H1";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <H1>Text</H1>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
