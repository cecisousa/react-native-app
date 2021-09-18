import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

export default function StyledButton({ children, style, onPress }) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
}
