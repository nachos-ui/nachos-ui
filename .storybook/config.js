import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { Provider } from "../src/Theme";
import { configureViewport } from "@storybook/addon-viewport";
import PropTable from "./prop_table";
import { setDefaults } from "@storybook/addon-info";
import { setOptions } from "@storybook/addon-options";
import { View, Image } from "react-native";

setDefaults({
  TableComponent: PropTable, // Override the component used to render the props table
  inline: true,
  propTablesExclude: [View, Image],
  excludedPropTypes: ["theme"]
});
// import { withViewport } from "@storybook/addon-viewport";

// addDecorator(withViewport("iphone5"));

const ThemeDecorator = storyFn => <Provider>{storyFn()}</Provider>;
addDecorator(ThemeDecorator);

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.story.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}
setOptions({
  name: "Nachos UI",
  showAddonPanel: false
});
configure(loadStories, module);
