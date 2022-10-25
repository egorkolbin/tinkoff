import { Text, TouchableHighlight, StyleSheet } from "react-native";
import React, { FC } from "react";

interface IButton {
  onPress: () => void;
  title: string;
  colors?: [string, string];
}

const Button: FC<IButton> = ({
  onPress,
  title,
  colors = ["#faf089", "#fbbf24"],
}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={colors[1]} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#faf089',
    color: 'black',
    borderRadius: 10,
    padding: '10 0 10 0',
  },
  text: {
    textAlign: 'center',
  }
})

export default Button;
