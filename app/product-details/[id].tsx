import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { productsData, saleProductsData } from "@/data/data";
import { ProductType } from "@/types/type";
import ImageSlider from "@/components/ProductsPage/ImageSlider";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import ColorPallet from "@/components/ProductsPage/ColorPallet";

type Props = {};

const ProductDetails = (props: Props) => {
  const { id } = useLocalSearchParams();
  const [Product, setProduct] = useState<ProductType>();

  useEffect(() => {
    getProduct(Number(id));
  }, [Product]);

  const getProduct = (id: number) => {
    const product =
      productsData.find((item) => item.id === id) ||
      saleProductsData.find((item) => item.id === id);
    setProduct(product);
  };
  return (
    Product && (
      <ScrollView>
        <ImageSlider imageList={Product.images} />
        <View style={styles.container}>
          <View style={styles.functionWrapper}>
            <View style={styles.ratingWrapper}>
              <Ionicons name="star" size={20} color={Colors.highlight} />
              <Text style={styles.rating}>
                4.5 <Text style={styles.number}>(165)</Text>
              </Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="heart-outline" size={22} color={Colors.black} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.title}>{Product.title}</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>${Product.price}</Text>
              <View style={styles.discountWrapper}>
                <Text style={styles.discountTxt}>(12% Off)</Text>
              </View>
              <Text style={styles.oldPriceTxt}>${Product.price + 10}</Text>
            </View>
            <Text style={styles.description}>{Product.description}</Text>

            <View style={styles.productVariationWrapper}>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Color</Text>
                <ColorPallet />
              </View>
              <View style={styles.productVariationType}>
                <Text style={styles.productVariationTitle}>Size</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  functionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  ratingWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 5,
  },
  rating: {
    fontSize: 18,
    fontWeight: "500",
    color: Colors.black,
  },
  number: {
    fontSize: 16,
    fontWeight: "light",
    color: Colors.gray,
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: Colors.black,
    letterSpacing: 0.6,
    lineHeight: 32,
    marginBottom: 5,
  },
  price: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    fontWeight: "light",
    color: Colors.black,
    marginVertical: 10,
    textAlign: "justify",
    letterSpacing: 0.6,
    lineHeight: 24,
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  discountWrapper: {
    backgroundColor: Colors.extraLghtGray,
    padding: 5,
    borderRadius: 10,
  },
  discountTxt: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.primary,
  },
  oldPriceTxt: {
    fontSize: 16,
    fontWeight: "light",
    textDecorationLine: "line-through",
    color: Colors.gray,
  },
  productVariationWrapper: {
    flexDirection: "row",
    marginTop: 10,
    flexWrap: "wrap",
  },
  productVariationType: {
    width: "50%",
    gap: 5,
    marginBottom: 10,
  },
  productVariationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
});
