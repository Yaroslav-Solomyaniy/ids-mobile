import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./index.scss";
import CustomText from "../CustomText";

interface ICustomButton {
  disabled: boolean;
  onPress: () => void;
  buttonText: string;
  andStyles?: string;
}

const CustomButton = ({
  andStyles,
  disabled,
  onPress,
  buttonText,
}: ICustomButton): JSX.Element => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabled_btn,
        pressed && styles.pressed_btn,
        andStyles,
      ]}
      disabled={disabled}
      onPress={onPress}
    >
      <CustomText
        text={buttonText}
        andStyles={styles.button_text}
        textWeight={"500"}
      />
    </Pressable>
  );
};

export default CustomButton;
