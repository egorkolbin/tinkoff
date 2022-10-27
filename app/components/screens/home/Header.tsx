import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Padding from "../../ui/Padding";
import Avatar from "../../ui/Avatar";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useProfile } from "../profile/useProfile";
import Loader from "../../ui/Loader";

const Header: FC = () => {
  const { isLoading, name } = useProfile();
  const { navigate } = useNavigation();

  return isLoading ? (
    <Loader />
  ) : (
    <Padding style={styles.headerPadding}>
      <Avatar name={name}></Avatar>
      <TouchableOpacity
        onPress={() => navigate("Profile")}
        style={styles.headerBlock}
      >
        <Text style={styles.headerText}>{name}</Text>
        <Entypo name="chevron-small-right" size={28} style={styles.backArrow} />
      </TouchableOpacity>
    </Padding>
  );
};

const styles = StyleSheet.create({
  headerPadding: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
  },
  headerBlock: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 24,
    paddingLeft: 5,
  },
  backArrow: {},
});
export default Header;
