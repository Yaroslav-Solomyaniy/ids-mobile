import {Pressable, Text, View} from 'react-native';
import React, {useCallback, useMemo, useRef, useState} from 'react';
import styles from './LoginForm.scss';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm';
import CustomButton from '../CustomButton';
import CustomInput from '../CustomInput';
import {useNavigation} from '@react-navigation/native';
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
  const navigator = useNavigation<any>();

  const handleSubmit = () => {
    console.log(formData);
    navigator.navigate('IndividualPlan');
    setFormData(initialValue);
  };

  const handleChangeEmail = useCallback(
    (email: string) => {
      setFormData({...formData, email: email});
    },
    [formData],
  );
  const handleChangePassword = useCallback(
    (password: string) => {
      setFormData({...formData, password: password});
    },
    [formData],
  );

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
        <CustomInput
          placeholder={'E-mail'}
          onChangeText={email => handleChangeEmail(email)}
          value={formData.email}
          style={styles.input_email}
        />
        <CustomInput
          placeholder={'Пароль'}
          onChangeText={password => handleChangePassword(password)}
          value={formData.password}
          style={styles.input_password}
          isSecurity={true}
        />
        <Pressable onPress={handlePresentModalPress}>
          <Text style={styles.text}>Забули пароль?</Text>
        </Pressable>
        <CustomButton
          disabled={isDisabledSubmitBtn}
          onPress={handleSubmit}
          buttonText={'Вхід'}
        />

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
