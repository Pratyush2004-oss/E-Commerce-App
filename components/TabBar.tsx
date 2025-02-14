import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  LayoutChangeEvent,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabbarButton from "./TabbarButton";
import { Colors } from "@/constants/Colors";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useEffect, useState } from "react";
export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [dimensions, setdimensions] = useState({ height: 20, width: 100 });

  const buttonWidth = dimensions.width / state.routes.length;

  // Changing the active tab status
  useEffect(() => {
    TabPositionX.value = withTiming(buttonWidth * state.index, {
      duration: 200,
    });
  }, [state.index]);

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setdimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const TabPositionX = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: TabPositionX.value }],
    };
  });
  return (
    <View style={styles.tabBar} onLayout={onTabbarLayout}>
      <Animated.View
        style={[
          animatedStyle,
          {
            position: "absolute",
            width: buttonWidth / 2,
            height: 3,
            top: 0,
            backgroundColor: Colors.primary,
            left: 20,
          },
        ]}
      />
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
});
