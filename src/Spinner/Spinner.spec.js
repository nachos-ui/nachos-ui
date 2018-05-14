import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Spinner from "../Spinner";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Spinner />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
