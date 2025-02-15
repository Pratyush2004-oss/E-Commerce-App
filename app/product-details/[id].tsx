import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { productsData, saleProductsData } from "@/data/data";
import { ProductType } from "@/types/type";
import ImageSlider from "@/components/ProductsPage/ImageSlider";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import ColorPallet from "@/components/ProductsPage/ColorPallet";
import SizePallet from "@/components/ProductsPage/SizePallet";
import { useHeaderHeight } from "@react-navigation/elements";
import Animated, { FadeInDown, SlideInDown } from "react-native-reanimated";

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

  const headerHeight = useHeaderHeight();
  return (
    Product && (
      <>
        <Stack.Screen
          options={{ headerTitle: Product.title, headerTransparent: true }}
        />
        <ScrollView style={{ marginTop: headerHeight, marginBottom: 80 }}>
          <Animated.View entering={FadeInDown.delay(300).duration(500)}>
            <ImageSlider imageList={Product.images} />
          </Animated.View>
          <View style={styles.container}>
            <Animated.View
              style={styles.functionWrapper}
              entering={FadeInDown.delay(500).duration(500)}
            >
              <View style={styles.ratingWrapper}>
                <Ionicons name="star" size={20} color={Colors.highlight} />
                <Text style={styles.rating}>
                  4.5 <Text style={styles.number}>(165)</Text>
                </Text>
              </View>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={22} color={Colors.black} />
              </TouchableOpacity>
            </Animated.View>
            <View>
              <Animated.Text
                entering={FadeInDown.delay(700).duration(500)}
                style={styles.title}
              >
                {Product.title}
              </Animated.Text>
              <Animated.View
                entering={FadeInDown.delay(800).duration(500)}
                style={styles.priceWrapper}
              >
                <Text style={styles.price}>${Product.price}</Text>
                <View style={styles.discountWrapper}>
                  <Text style={styles.discountTxt}>(12% Off)</Text>
                </View>
                <Text style={styles.oldPriceTxt}>${Product.price + 10}</Text>
              </Animated.View>
              <Animated.Text
                entering={FadeInDown.delay(900).duration(500)}
                style={styles.description}
              >
                {Product.description}
              </Animated.Text>

              <Animated.View
                entering={FadeInDown.delay(1000).duration(500)}
                style={styles.productVariationWrapper}
              >
                <View style={styles.productVariationType}>
                  <Text style={styles.productVariationTitle}>Color</Text>
                  <ColorPallet />
                </View>
                <View style={styles.productVariationType}>
                  <Text style={styles.productVariationTitle}>Size</Text>
                  <SizePallet />
                </View>
              </Animated.View>
            </View>
          </View>
        </ScrollView>
        <Animated.View
          entering={SlideInDown.delay(500).duration(500)}
          style={styles.buttonWrapper}
        >
          <TouchableOpacity
            style={[
              styles.button,
              {
                backgroundColor: Colors.white,
                borderWidth: 1,
                borderColor: Colors.primary,
              },
            ]}
          >
            <Ionicons name="cart-outline" size={16} color={Colors.primary} />
            <Text style={[styles.buttonTxt, { color: Colors.primary }]}>
              Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>Buy Now</Text>
          </TouchableOpacity>
        </Animated.View>
      </>
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
  description: {
    fontSize: 16,
    fontWeight: "light",
    color: Colors.black,
    marginVertical: 10,
    textAlign: "justify",
    letterSpacing: 0.6,
    lineHeight: 24,
  },
  productVariationWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  productVariationType: {
    width: "47%",
    gap: 5,
    marginBottom: 10,
  },
  productVariationTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.black,
  },
  buttonWrapper: {
    position: "absolute",
    height: 75,
    padding: 20,
    bottom: 0,
    width: "100%",
    backgroundColor: Colors.white,
    flexDirection: "row",
    gap: 10,
  },
  button: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
    backgroundColor: Colors.primary,
    alignItems: "center",
    height: 40,
    justifyContent: "center",
    borderRadius: 50,
    elevation: 5,
    shadowColor: Colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
  },
  buttonTxt: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },
});
