import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import styles from './LoginForm.scss';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm';
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

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['60%', '65%', '70%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // const handleCloseModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.close();
  // }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
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
        <Pressable onPress={handlePresentModalPress}>
          <Text style={styles.text}>Забули пароль?</Text>
        </Pressable>
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

        <BottomSheetModal
          ref={bottomSheetModalRef}
          enablePanDownToClose={true}
          enableOverDrag={true}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <ResetPasswordForm />
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

export default LoginForm;
