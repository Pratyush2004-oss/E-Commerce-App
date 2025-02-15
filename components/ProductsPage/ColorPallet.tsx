import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {};

const ColorPallet = (props: Props) => {
  return (
    <View style={styles.productVariationValueWrapper}>
      <View
        style={[{ backgroundColor: "#FF0000" }, styles.productVariationValue]}
      />
      <View
        style={[{ backgroundColor: "#00FF00" }, styles.productVariationValue]}
      />
      <View
        style={[{ backgroundColor: "#0000FF" }, styles.productVariationValue]}
      />
      <View
        style={[{ backgroundColor: "#FFFF00" }, styles.productVariationValue]}
      />
      <View
        style={[{ backgroundColor: "#FF00FF" }, styles.productVariationValue]}
      />
      <View
        style={[{ backgroundColor: "#00FFFF" }, styles.productVariationValue]}
      />
      <View
        style={[{ backgroundColor: "#000000" }, styles.productVariationValue]}
      />
      <View
        style={[{ backgroundColor: "#FFFFFF" }, styles.productVariationValue]}
      />
    </View>
  );
};

export default ColorPallet;

const styles = StyleSheet.create({
  productVariationValueWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
    flexWrap: "wrap",
  },
  productVariationValue: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});
