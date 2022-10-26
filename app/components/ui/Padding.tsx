import { StyleSheet, View } from "react-native";
import React, { FC } from "react";

interface IPadding {
  children?: React.ReactNode;
  style?: any;
}

const Padding: FC<IPadding> = ({ children, style }) => {
  return <View style={{ ...styles.view, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
});
export default Padding;
