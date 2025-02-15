import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {};

const SizePallet = (props: Props) => {
  return (
    <View style={styles.productVariationValueWrapper}>
      <View style={styles.productVariationSizeValue}>
        <Text style={styles.productVariationSizeValueTxt}>S</Text>
      </View>
      <View style={styles.productVariationSizeValue}>
        <Text style={styles.productVariationSizeValueTxt}>M</Text>
      </View>
      <View style={styles.productVariationSizeValue}>
        <Text style={styles.productVariationSizeValueTxt}>L</Text>
      </View>
      <View style={styles.productVariationSizeValue}>
        <Text style={styles.productVariationSizeValueTxt}>XL</Text>
      </View>
      <View style={styles.productVariationSizeValue}>
        <Text style={styles.productVariationSizeValueTxt}>XXL</Text>
      </View>
    </View>
  );
};

export default SizePallet;

const styles = StyleSheet.create({
  productVariationValueWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  productVariationSizeValue: {
    width: 40,
    height: 30,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.extraLghtGray,
    borderColor: Colors.lightGray,
    borderWidth: 1,
  },
  productVariationSizeValueTxt: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: "500",
  },
});
