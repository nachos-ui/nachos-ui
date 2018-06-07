import { storiesOf } from "../../storybook";
import { withInfo } from "../../storybook";
import React from "react";
import Carousel from "./index";
import { View, Image } from "react-native";

const Example = () => {
  var images = [
    "https://placehold.it/300/311112",
    "https://placehold.it/300/59C480",
    "https://placehold.it/300/546C80",
    "https://placehold.it/300/D58554",
    "https://placehold.it/300/F0CD9B",
    "https://placehold.it/300/311112"
  ];
  return (
    <View style={{ marginVertical: 15 }}>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        width={400}
        height={400}
      >
        {images.map((image, index) => {
          return (
            <View key={index}>
              <Image
                draggable={false}
                style={{
                  width: 400,
                  height: 400
                }}
                source={{ uri: image }}
              />
            </View>
          );
        })}
      </Carousel>
    </View>
  );
};

storiesOf("Carousel", module).add("default", withInfo()(Example));

export default Example;
