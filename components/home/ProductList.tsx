import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { ProductType } from "@/types/type";
import ProductsCard from "./ProductsCard";
import { Colors } from "@/constants/Colors";

type Props = {
  products: ProductType[];
  flatList: boolean;
};

const ProductList = ({ products, flatList = true }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>For You</Text>
        <TouchableOpacity>
          <Text style={styles.titleBtn}>See All</Text>
        </TouchableOpacity>
      </View>
      {flatList ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 20,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ index, item }) => (
            <ProductsCard item={item} index={index} />
          )}
        />
      ) : (
        <View style={styles.displayContainer}>
          {products.map((item, index) => (
            <View key={index} style={styles.productWrapper}>
              <ProductsCard item={item} index={index} />
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7,
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
  displayContainer:{
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems:'stretch',
    justifyContent:"space-between",
  },
  productWrapper: {
    width: "50%",
    marginBottom: 20,
    paddingLeft:5
  }
});
