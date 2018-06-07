import {
  getStorybookUI,
  configure,
  addDecorator
} from "@storybook/react-native";
import React from "react";
import { NativeModules, AppRegistry } from "react-native";
import url from "url";
import { loadStories, stories } from "./storybook/storyLoader";
import "@storybook/addon-links/register";

const { hostname } = url.parse(NativeModules.SourceCode.scriptURL);

const ThemeDecorator = storyFn => <Provider>{storyFn()}</Provider>;
addDecorator(ThemeDecorator);

const StorybookUI = getStorybookUI({
  port: 6006,
  host: hostname,
  onDeviceUI: true
});
configure(() => {
  loadStories();
}, module);

const StorybookUIHMRRoot = () => <StorybookUI />;

AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIHMRRoot);
export default StorybookUIHMRRoot;
