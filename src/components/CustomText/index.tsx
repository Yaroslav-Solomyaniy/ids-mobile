import React, { FunctionComponent } from "react";
import { StyleSheet, Text } from "react-native";
interface CustomTextProps {
  textWeight?: "400" | "500" | "600";
  text: string;
  andStyles?: string;
}

const CustomText: FunctionComponent<CustomTextProps> = ({
  text,
  textWeight,
  andStyles,
}) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  let textStyle: {};
  switch (textWeight) {
    case "400":
      textStyle = styles.regular;
      break;
    case "500":
      textStyle = styles.medium;
      break;
    case "600":
      textStyle = styles.bold;
      break;
    default:
      textStyle = styles.regular;
      break;
  }
  return <Text style={[textStyle, andStyles]}>{text}</Text>;
};
const styles = StyleSheet.create({
  regular: {
    fontFamily: "Roboto-Regular",
  },
  medium: {
    fontFamily: "Roboto-Medium",
  },
  bold: {
    fontFamily: "Roboto-Bold",
  },
});
export default CustomText;
