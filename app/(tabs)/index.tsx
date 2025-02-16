import React, { useEffect, useState } from "react";
import { CategoryType, ProductType } from "@/types/type";
import {
  productsData,
  categoriesData,
  saleProductsData,
} from "../../data/data";
import { Stack } from "expo-router";
import Header from "@/components/Header";
import ProductList from "@/components/home/ProductList";
import CategoryList from "@/components/home/CategoryList";
import FlashSale from "@/components/home/FlashSale";
import { Image, ScrollView, View } from "react-native";
import Loader from "@/components/Loader";

type Props = {
  products: ProductType[];
};

const HomeScreen = (props: Props) => {
  const [loading, setloading] = useState<boolean>(false);
  const [products, setproducts] = useState<ProductType[]>([]);
  const [categories, setcategories] = useState<CategoryType[]>([]);
  const [saleProducts, setSaleProducts] = useState<ProductType[]>([]);
  // Products
  useEffect(() => {
    setloading(true);
    setproducts(productsData);
    setloading(false);
  }, [productsData]);

  // categories
  useEffect(() => {
    setloading(true);
    setcategories(categoriesData);
    setloading(false);
  }, [categoriesData]);

  // flash sale
  useEffect(() => {
    setloading(true);
    setSaleProducts(saleProductsData);
    setloading(false);
  }, [saleProductsData]);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      {loading && <Loader />} 
      <ScrollView>
        <CategoryList categories={categories} />
        <FlashSale products={saleProducts} />
        <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
          <Image
            source={require("@/assets/images/sale-banner.jpg")}
            style={{
              width: "100%",
              height: 150,
              borderRadius: 15,
            }}
          />
        </View>
        <ProductList products={products} flatList={false} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
