import "react-native";
import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Checkbox from "../Checkbox";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Checkbox checked />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render disabled", () => {
  const wrapper = shallow(
    <Provider>
      <Checkbox disabled />
    </Provider>
  );
  expect(wrapper.find("TouchableOpacity").prop("disabled")).toBe(true);
});

it("should call onChange callback", () => {
  const callback = jest.fn();
  const wrapper = shallow(
    <Provider>
      <Checkbox onValueChange={callback} />
    </Provider>
  );
  wrapper.find("TouchableOpacity").simulate("press");
  expect(callback).toBeCalled();
});
