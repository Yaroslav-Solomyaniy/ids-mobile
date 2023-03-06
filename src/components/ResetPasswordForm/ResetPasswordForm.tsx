import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "./ResetPassswordForm.scss";
import { useBottomSheetModal } from "@gorhom/bottom-sheet";
import { Email } from "../../RegEx";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";
import CustomInput from "../CustomInput";

const ResetPasswordForm = (): JSX.Element => {
  const { dismissAll } = useBottomSheetModal();
  const [email, setEmail] = useState<string>("");
  const isDisabledButton = !Email.test(email);

  return (
    <View style={styles.content}>
      <CustomText
        textWeight={"500"}
        andStyles={styles.title}
        text={"Відновлення паролю"}
      />
      <CustomInput
        placeholder={"E-mail"}
        onChangeText={(data) => setEmail(data)}
        value={email}
        style={styles.input}
        border={"blue"}
      />
      <CustomButton
        disabled={isDisabledButton}
        onPress={dismissAll}
        buttonText={"Надіслати пароль"}
        andStyles={styles.button}
      />
    </View>
  );
};

export default ResetPasswordForm;
