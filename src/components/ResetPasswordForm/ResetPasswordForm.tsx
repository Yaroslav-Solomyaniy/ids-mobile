import React, {useState} from 'react';
import {Pressable, Text, TextInput, View} from 'react-native';
import styles from './ResetPassswordForm.scss';
import {useBottomSheetModal} from '@gorhom/bottom-sheet';
import {Email} from '../../RegEx';

const ResetPasswordForm = (): JSX.Element => {
  const {dismissAll} = useBottomSheetModal();
  const [email, setEmail] = useState<string>('');

  // const onChangeText = () => {
  //   console.log(email);
  // };

  const isDisabledButton = !Email.test(email);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Відновлення паролю</Text>
      <TextInput
        placeholder={'E-mail'}
        autoCorrect={false}
        placeholderTextColor={'#6F6F6F'}
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Pressable
        disabled={isDisabledButton}
        style={({pressed}) => [
          styles.button,
          pressed && styles.pressedButton,
          isDisabledButton && styles.disabledButton,
        ]}
        onPress={dismissAll}>
        <Text style={styles.buttonTitle}>Надіслати пароль</Text>
      </Pressable>
    </View>
  );
};

export default ResetPasswordForm;
