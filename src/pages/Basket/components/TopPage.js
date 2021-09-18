import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import StyledText from "../../../components/StyledText";
import TopImage from "../../../../assets/topo.png";

const width = Dimensions.get("screen").width;

export default function TopPage({ title }) {
  return (
    <>
      <Image source={TopImage} style={styles.imageTop} />
      <StyledText style={styles.title}>{title}</StyledText>
    </>
  );
}

const styles = StyleSheet.create({
  imageTop: {
    width: "100%",
    height: (578 / 768) * width,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "#FFFFFF",
    fontWeight: "bold",
    padding: 16,
  },
});
