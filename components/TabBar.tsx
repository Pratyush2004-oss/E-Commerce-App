import { View, Text, TouchableOpacity, StyleSheet, LayoutChangeEvent } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabbarButton from "./TabbarButton";
import { Colors } from "@/constants/Colors";
import Animated from "react-native-reanimated";
import { useState } from "react";
export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [dimensions, setdimensions] = useState({ height: 20, width: 100 });

  const onTabbarLayout = (e: LayoutChangeEvent) => {

  }
  return (
    <View style={styles.tabBar} onLayout={onTabbarLayout}>
      <Animated.View style={styles.animatedTabbar} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabbarButton
            key={route.name}
            isFocused={isFocused}
            label={label}
            onPress={onPress}
            onLongPress={onLongPress}
            routeName={route.name}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 40,
    backgroundColor: Colors.white,
  },
  animatedTabbar: {
    position: "absolute",
    top: 0,
    left: 20,
    height: 2,
    width: 40,
  },
});
