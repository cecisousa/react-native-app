import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "../../../components/StyledText";
import StyledButton from "../../../components/StyledButton";

export default function Details({
  basketName,
  logoImage,
  farmName,
  description,
  price,
  button,
}) {
  return (
    <>
      <StyledText style={styles.basketName}>{basketName}</StyledText>
      <View style={styles.farmHeading}>
        <Image source={logoImage} style={styles.logoImage} />
        <StyledText style={styles.farmName}>{farmName}</StyledText>
      </View>
      <StyledText style={styles.description}>{description}</StyledText>
      <StyledText style={styles.price}>{price}</StyledText>
      <StyledButton style={styles.button} onPress={() => {}}>
        <StyledText style={styles.buttonText}>{button}</StyledText>
      </StyledButton>
    </>
  );
}

const styles = StyleSheet.create({
  basketName: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  farmHeading: {
    flexDirection: "row",
    paddingVertical: 12,
    alignItems: "center",
  },
  logoImage: {
    width: 32,
    height: 32,
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
