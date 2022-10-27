import { StyleSheet, Text } from "react-native";
import React, { FC } from "react";
import Padding from "./Padding";

const Heading: FC<{ text: string, isCenter?: boolean }> = ({ text, isCenter = false }) => {
  return (
    <Padding>
      <Text style={styles.heading}>{text}</Text>
    </Padding>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 40,
    textAlign: 'center',
  },
});
export default Heading;
