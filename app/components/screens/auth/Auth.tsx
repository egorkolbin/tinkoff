import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import React, { FC, useState } from "react";
// import { styleCenter } from '../../layouts/Layout'
import { styled, withExpoSnack } from "nativewind";
import { useAuth } from "../../../hooks/useAuth";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const { isLoading, login, register } = useAuth();
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);

  const authHandler = async () => {
    const {email, password} = data

    if(isReg) await register(email, password)
    else await login(email, password)

    setData({} as IData)
  };

  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText className="text-black-800 font-bold text-3xl">
        {isReg ? "Sign Up" : "Sign In"}
      </StyledText>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Field
            onChange={(val) => setData({ ...data, email: val })}
            val={data.email}
            placeholder="Enter email"
          />
          <Field
            onChange={(val) => setData({ ...data, password: val })}
            val={data.password}
            placeholder="Enter password"
            isSecure={true}
          />
          <Button onPress={authHandler} title="Lets go"/>
          <Pressable onPress={() => setIsReg(!isReg)} style={styles.pressable}>
            <Text style={styles.pressableText}>{isReg? 'Login' : 'Register'}</Text>
          </Pressable>
        </>
      )}
    </StyledView>
  );
};

const styles = StyleSheet.create({
  pressable: {
    width: '80%'
    
  },
  pressableText: {
    color: 'rgb(14, 165, 233)',
    marginTop: 10,
    textAlign: 'right',
    opacity: 0.7,
  }
})

export default withExpoSnack(Auth);