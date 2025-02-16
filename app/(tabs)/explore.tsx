import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { CategoryType } from "@/types/type";
import { categoriesData } from "@/data/data";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import Loader from "@/components/Loader";
import Animated, { BounceIn } from "react-native-reanimated";
type Props = {};

const ExploreScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const [categories, setcategories] = useState<CategoryType[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  const getCategories = () => {
    setloading(true);
    setcategories(categoriesData);
    setloading(false);
  };
  useEffect(() => {
    getCategories();
  }, [categories]);
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        {loading && <Loader />}
        <FlatList
          data={categories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animated.View
              style={styles.itemWrapper}
              key={index}
              entering={BounceIn.delay(300 + index * 100).duration(1000)}
            >
              <Text style={styles.text}>{item.name}</Text>
              <Image source={{ uri: item.image }} style={styles.image} />
            </Animated.View>
          )}
        />
      </View>
    </>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.extraLghtGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
});
