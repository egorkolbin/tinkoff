import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";

interface IAvatar {
  name?: string | null;
  size?: "small" | "large";
}

const Avatar: FC<IAvatar> = ({ name, size = "small" }) => {
  const isSmall = size === "small";
  return (
    <View style={styles.avatar}>
      <Text style={styles.avatarText}>{name?.slice(0, 1)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
    avatar: {
        borderRadius: 18,
        backgroundColor: 'rgb(17, 24, 39);',
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarText: {
        color: 'white',
    }
})
export default Avatar;
