import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import P from "../P";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <P>Text</P>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
