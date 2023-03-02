import React from 'react';
import styles from './index.scss';
import {TextInput} from 'react-native';

interface ICustomInput {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string | undefined;
  style: string;
  isSecurity?: boolean;
}
const CustomInput = ({
  placeholder,
  onChangeText,
  value,
  style,
  isSecurity,
}: ICustomInput): JSX.Element => {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
      style={[styles.input, style]}
      autoCorrect={false}
      placeholderTextColor={'#6F6F6F'}
      secureTextEntry={isSecurity}
    />
  );
};

export default CustomInput;
