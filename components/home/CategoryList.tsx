import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { CategoryType } from "@/types/type";
import { Colors } from "@/constants/Colors";

type Props = {
  categories: CategoryType[];
};

const CategoryList = ({ categories }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={styles.items}>
              <Image source={{ uri: item.image }} style={styles.catImage} />
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  items: {
    marginVertical: 10,
    gap: 5,
    alignItems: "center",
    marginLeft: 20,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.black,
    letterSpacing: 0.6,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  catImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.lightGray,
  },
});
