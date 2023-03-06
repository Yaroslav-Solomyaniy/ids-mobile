import React from "react";
import styles from "./index.scss";
import { StyleSheet, TextInput } from "react-native";

interface ICustomInput {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string | undefined;
  style: string;
  isSecurity?: boolean;
  border: "black" | "blue";
}
const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  style,
  isSecurity,
  border,
}: ICustomInput): JSX.Element => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={[
        styles.input,
        styled.text,
        border === "blue" ? styled.borderBlue : styled.borderBlack,
        style,
      ]}
      autoCorrect={false}
      placeholderTextColor={"#6F6F6F"}
      secureTextEntry={isSecurity}
    />
  );
};

const styled = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Regular",
  },
  borderBlue: {
    borderWidth: 1,
    borderColor: "#428BCA",
  },
  borderBlack: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
  },
});

export default CustomInput;
