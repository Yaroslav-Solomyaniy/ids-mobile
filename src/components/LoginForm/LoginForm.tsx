import {Pressable, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import styles from './LoginForm.scss';
interface ILoginForm {
  email: string;
  password: string;
}

const initialValue: ILoginForm = {
  email: '',
  password: '',
};
const LoginForm = () => {
  const [formData, setFormData] = useState<ILoginForm>(initialValue);
  const isDisabledSubmitBtn =
    formData.email.length < 10 || formData.password.length < 10;

  const handleSubmit = () => {
    console.log(formData);
    setFormData(initialValue);
  };

  return (
    <View style={styles.form}>
      <TextInput
        placeholder={'E-mail'}
        onChangeText={text => setFormData({...formData, email: text})}
        value={formData.email}
        style={[styles.input, styles.input_email]}
        autoCorrect={false}
        placeholderTextColor={'#6F6F6F'}
      />
      <TextInput
        placeholder={'Пароль'}
        secureTextEntry={true}
        onChangeText={text => setFormData({...formData, password: text})}
        value={formData.password}
        style={[styles.input, styles.input_password]}
        autoCorrect={false}
        placeholderTextColor={'#6F6F6F'}
      />
      <Text style={styles.text}>Забули пароль?</Text>
      <Pressable
        disabled={isDisabledSubmitBtn}
        style={({pressed}) => [
          styles.button,
          isDisabledSubmitBtn && styles.disabled_btn,
          pressed && styles.btn_pressed,
        ]}
        onPress={handleSubmit}>
        <Text style={styles.button_text}>Вхід</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
