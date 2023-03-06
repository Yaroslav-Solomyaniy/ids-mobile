declare module "*";

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.ttf";

declare module "*.ttf" {
  const value: import("expo-font").FontSource;
  export default value;
}
