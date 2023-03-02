import React from 'react';
import {Pressable, Text} from 'react-native';
import styles from './index.scss';

interface ICustomButton {
  disabled: boolean;
  onPress: () => void;
  buttonText: string;
}

const CustomButton = ({
  disabled,
  onPress,
  buttonText,
}: ICustomButton): JSX.Element => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        disabled && styles.disabled_btn,
        pressed && styles.pressed_btn,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text style={styles.button_text}>{buttonText}</Text>
    </Pressable>
  );
};

export default CustomButton;
