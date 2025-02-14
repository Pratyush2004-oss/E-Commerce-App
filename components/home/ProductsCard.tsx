import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ProductType } from "@/types/type";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = {
  item: ProductType;
  index: number;
};

const width = Dimensions.get("window").width - 40;
const ProductsCard = ({ item, index }: Props) => {
  return (
    <Animated.View
      style={styles.container}
      entering={FadeInDown.delay(300 + index * 100).duration(500)}
    >
      <Image source={{ uri: item.images[0] }} style={styles.prodImage} />
      <TouchableOpacity style={styles.bookmarkIcon}>
        <Ionicons name="heart-outline" size={22} color={Colors.black} />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.ratingWrapper}>
          <Ionicons name="star" size={20} color={Colors.highlight} />
          <Text style={styles.rating}>4.5</Text>
        </View>
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Animated.View>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
  },
  prodImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
  bookmarkIcon: {
    position: "absolute",
    top: 12,
    right: 10,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    padding: 5,
    borderRadius: 30,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.black,
    letterSpacing: 1.1,
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 7,
    alignItems: "center",
    gap: 1,
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.primary,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.gray,
  },
});
