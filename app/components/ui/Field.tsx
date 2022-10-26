import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { TextInput } from "react-native";
// import { styled, withExpoSnack } from "nativewind";

// const StyledTextInput = styled(TextInput)

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: FC<IField> = ({ onChange, val, placeholder, isSecure }) => {
  return (
    <TextInput
      style={styles.field}
      //   showSoftInputOnFocus={false}
      placeholder={placeholder}
      value={val}
      onChangeText={onChange}
      secureTextEntry={isSecure}
      //   autoCapitalize="none"
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  field: {
    borderRadius: 10,
    backgroundColor: "rgb(209, 213, 219)",
    width: "80%",
    padding: 10,
    marginTop: 20,
  },
});

export default Field;
