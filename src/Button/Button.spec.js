import "react-native";
import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Button from "../Button";
import { Provider } from "../Theme";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Button>Submit</Button>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render disabled", () => {
  const wrapper = shallow(
    <Provider>
      <Button disabled>Submit</Button>
    </Provider>
  );
  expect(wrapper.find("TouchableOpacity").prop("disabled")).toBe(true);
});

it("should call onPress callback", () => {
  const callback = jest.fn();
  const wrapper = shallow(
    <Provider>
      <Button onPress={callback}>Submit</Button>
    </Provider>
  );
  wrapper.find("TouchableOpacity").simulate("press");
  expect(callback).toBeCalled();
});
