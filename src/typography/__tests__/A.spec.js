import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import A from "../A";
import { Provider } from "../../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <A href="http://avocode.com">This is a link</A>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
