import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TopPage from "./components/TopPage";
import Details from "./components/Details";
import Item from "./components/Item";
import StyledText from "../../components/StyledText";

export default function Basket({ top, details, items }) {
  return (
    <FlatList
      data={items.list}
      renderItem={Item}
      keyExtractor={({ name }) => name}
      style={styles.list}
      ListHeaderComponent={() => (
        <>
          <TopPage {...top} />
          <View style={styles.mainViewStyle}>
            <Details {...details} />
            <StyledText style={styles.title}>{items.title}</StyledText>
          </View>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  mainViewStyle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  list: {
    paddingHorizontal: 0, // Suggestion: 16
  },
});
