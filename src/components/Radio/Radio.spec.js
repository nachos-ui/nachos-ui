import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "../Theme";
import Radio from "../Radio";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Radio />{" "}
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
