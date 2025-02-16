import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { CartItemType } from "@/types/type";
import { cartProducts } from "@/data/data";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown, SlideInDown } from "react-native-reanimated";
type Props = {};

const CartScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const [loading, setloading] = useState<boolean>(false);
  const [cartItem, setcartItem] = useState<CartItemType[]>([]);
  const getCartItem = () => {
    setloading(true);
    setcartItem(cartProducts);
    setloading(false);
  };

  useEffect(() => {
    getCartItem();
  }, [cartProducts]);

  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <FlatList
          style={{ marginBottom: 50 }}
          data={cartItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Animated.View
              style={styles.itemWtapper}
              entering={FadeInDown.delay(300 + item.id * 100).duration(500)}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textArea}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.priceWrapper}>
                  <Text style={styles.price}>${item.price}</Text>
                </View>
                <View style={styles.actionButton}>
                  <TouchableOpacity>
                    <Ionicons
                      name="trash-bin-outline"
                      size={20}
                      color={Colors.error}
                      style={{ marginRight: 10 }}
                    />
                  </TouchableOpacity>
                  <View style={styles.quantityWrapper}>
                    <TouchableOpacity>
                      <Ionicons
                        name="remove-circle-outline"
                        size={22}
                        color={Colors.black}
                      />
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <TouchableOpacity>
                      <Ionicons
                        name="add-circle-outline"
                        size={22}
                        color={Colors.black}
                      />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Ionicons
                      name="heart-outline"
                      size={22}
                      color={Colors.black}
                    />
                  </View>
                </View>
              </View>
            </Animated.View>
          )}
        />
        <Animated.View entering={SlideInDown.delay(500).duration(500)} style={styles.footer}>
          <Text style={styles.total}>
            Total: $
            {cartItem.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </Text>
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkout}>Checkout</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemWtapper: {
    flexDirection: "row",
    gap: 25,
    alignItems: "center",
    backgroundColor: Colors.extraLghtGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  textArea: {
    width: "60%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
    letterSpacing: 0.6,
    marginBottom: 5,
  },
  priceWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.primary,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  quantityWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 4,
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: Colors.background,
  },
  total: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.black,
    letterSpacing: 1.6,
  },
  checkoutBtn: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 20,
  },
  checkout: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
});
