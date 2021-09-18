import React from "react";
import { View, Image, StyleSheet } from "react-native";
import StyledText from "../../../components/StyledText";

export default function Item({ item: { name, image } }) {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <StyledText style={styles.name}>{name}</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: "center",
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    color: "#464646",
  },
});
