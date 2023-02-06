import React, { ReactNode } from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

interface IProps {
  children?: ReactNode;
  // any props that come into the component
  style?: StyleSheet.NamedStyles<any> | StyleSheet.NamedStyles<unknown>;
}

export default function Screen({ children, style }: IProps) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
