import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { icon } from "@/constants/Icons";
import { Colors } from "@/constants/Colors";
import { cartProducts } from "@/data/data";

type Props = {
  onPress: Function;
  onLongPress: Function;
  isFocused: boolean;
  label: string;
  routeName: string;
};

const TabbarButton = (props: Props) => {
  const { isFocused, label, onLongPress, onPress, routeName } = props;
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabBarButton}
    >
      {/* Cart Badge */}
      {routeName === "cart" && (
        <View style={styles.badgeWrapper}>
          <Text style={styles.badgeTxt}>{cartProducts.length}</Text>
        </View>
      )}
      {icon[routeName]({
        color: isFocused ? Colors.primary : Colors.black,
      })}
      <Text style={{ color: isFocused ? "blue" : "black" }}>{label}</Text>
    </Pressable>
  );
};

export default TabbarButton;

const styles = StyleSheet.create({
  tabBarButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  badgeWrapper: {
    position: "absolute",
    backgroundColor: Colors.highlight,
    top: -5,
    right: 20,
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 10,
    zIndex: 10,
  },
  badgeTxt: {
    color: Colors.black,
    fontSize: 12,
  },
});
