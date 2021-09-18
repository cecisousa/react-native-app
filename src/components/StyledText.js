import React from "react";
import { Text, StyleSheet } from "react-native";

export default function StyledText({ children, style }) {
  let definedStyle = styles.regularText;

  if (style?.fontWeight === "bold") {
    definedStyle = styles.boldText;
  }

  return <Text style={[style, definedStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  regularText: {
    fontFamily: "MontserratRegular",
  },
  boldText: {
    fontFamily: "MontserratBold",
  },
});
