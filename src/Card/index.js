import React from "react";
import PropTypes from "prop-types";
import { View, Image } from "react-native";
import P from "../typography/P";
import { withTheme } from "../Theme";

const Card = props => {
  const { width, height, theme } = props;

  let bodyComponent;
  if (props.bodyContent) {
    bodyComponent = props.bodyContent;
  }

  let imageComponent;
  if (props.image) {
    imageComponent = (
      <View style={theme.imageWrapper}>
        <Image
          source={{ uri: props.image }}
          style={[theme.image, props.imageStyle]}
        />
      </View>
    );
  }

  let footerComponent;
  if (props.footerContent) {
    const isString = typeof props.footerContent === "string";
    let { footerContent } = props;
    if (isString) {
      footerContent = (
        <P style={theme.footerText} numberOfLines={1}>
          {footerContent}
        </P>
      );
    }

    footerComponent = (
      <View style={[theme.footer, props.footerStyle]}>{footerContent}</View>
    );
  }

  return (
    <View style={[theme.card, { width, height }, props.style]}>
      <View style={theme.body}>
        {imageComponent}
        {bodyComponent}
      </View>
      {footerComponent}
    </View>
  );
};

Card.themeConfig = {
  style: {
    card: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: "#eee",
      flexDirection: "column",
      alignItems: "stretch",
      alignSelf: "stretch",
      minWidth: 70,
      minHeight: 200,
      overflow: "hidden"
    },
    body: { position: "relative", alignSelf: "stretch", flex: 1 },
    imageWrapper: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    image: { flex: 1, resizeMode: "cover" },
    footer: {
      overflow: "hidden",
      borderTopWidth: 1,
      borderColor: "#efefef",
      height: 40,
      paddingHorizontal: 8,
      alignSelf: "stretch"
    },
    footerText: {
      paddingTop: 10,
      paddingBottom: 0
    }
  }
};

Card.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  bodyContent: PropTypes.node,
  image: PropTypes.string,
  imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  footerContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  footerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  theme: PropTypes.object
};

export default withTheme("Card", Card);
