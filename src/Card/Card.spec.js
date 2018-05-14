import { View, Text } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "../Theme";

import Card from "../Card";

it("should render correctly", () => {
  const component = renderer.create(
    <Provider>
      <Card footerContent="Footer content" image="image.jpg" />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should render custom footerContent", () => {
  const component = renderer.create(
    <Provider>
      <Card
        footerContent={
          <View style={{ position: "absolute" }}>
            <Text>Custom footer content</Text>
          </View>
        }
      />
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
