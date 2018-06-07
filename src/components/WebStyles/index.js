import React from "react";
import { Helmet } from "react-helmet";

// Kinda risky. Urls grabbed directly from cdn
// Needed to do this to rename the font-family
// to match React Native
// http://stackoverflow.com/questions/25011533/google-font-api-uses-browser-detection-how-to-get-all-font-variations-for-font
//
// Also grabbed MaterialIcons
export default () => (
  <Helmet>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </Helmet>
);
