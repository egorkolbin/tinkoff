import { View, Text, ScrollView } from "react-native";
import React, { FC } from "react";
import {useTailwind} from 'tailwind-rn';

interface ILayout {
  isScrollView?: boolean;
  children?: React.ReactNode;
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  const tw = useTailwind();
  const styleCenter = tw("h-full w-full bg-white pt-16");
  return (
    <View style={styleCenter}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};
export default Layout;
