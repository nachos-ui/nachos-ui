import { View, Image } from "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Carousel from "../Carousel";
import { Provider } from "../Theme";

it("should render correctly", () => {
  var images = [
    "https://placehold.it/600/311112",
    "https://placehold.it/600/59C480"
  ];
  const component = renderer.create(
    <Provider>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        width={400}
        height={400}
      >
        {images.map((image, index) => (image, index) => {
          return (
            <View key={index}>
              <Image
                style={{ width: 400, height: 400 }}
                source={{ uri: image }}
              />
            </View>
          );
        })}
      </Carousel>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should hide indicators", () => {
  var images = [
    "https://placehold.it/600/311112",
    "https://placehold.it/600/59C480"
  ];
  const component = renderer.create(
    <Provider>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        width={400}
        height={400}
      >
        {images.map((image, index) => (image, index) => {
          return (
            <View key={index}>
              <Image
                style={{ width: 400, height: 400 }}
                source={{ uri: image }}
              />
            </View>
          );
        })}
      </Carousel>
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
