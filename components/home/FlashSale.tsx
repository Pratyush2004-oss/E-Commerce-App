import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ProductType } from "@/types/type";
import ProductsCard from "./ProductsCard";

type Props = {
  products: ProductType[];
};

const FlashSale = ({ products }: Props) => {
  const [timeUnits, setTimeUnits] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const saleEndDate = new Date();
  //   get specific time and date
  // saleEndDate.setFullYear(2025, 7, 31);
  saleEndDate.setDate(saleEndDate.getDate() + 2);
  saleEndDate.setHours(23, 59, 59);
  useEffect(() => {
    const calculateTimeUnits = (timeDifference: number) => {
      const seconds = Math.floor(timeDifference / 1000);
      setTimeUnits({
        days: Math.floor((seconds % (365 * 24 * 60 * 60)) / (24 * 60 * 60)),
        hours: Math.floor((seconds % (24 * 60 * 60)) / (60 * 60)),
        minutes: Math.floor((seconds % (60 * 60)) / 60),
        seconds: seconds % 60,
      });
    };

    const updateCountDown = () => {
      const currentDate = new Date().getTime();
      const expiryTime = saleEndDate.getTime();
      const timeDifference = expiryTime - currentDate;
      if (timeDifference <= 0) {
        // countdown has ended
        calculateTimeUnits(0);
      } else {
        calculateTimeUnits(timeDifference);
      }
    };
    updateCountDown();
    const interval = setInterval(updateCountDown, 1000);
    return () => clearInterval(interval);
  }, []);
  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <View style={styles.timerWrapper}>
          <Text style={styles.title}>Flash Sale</Text>
          <View style={styles.timer}>
            <Ionicons name="timer-outline" size={18} color={Colors.black} />
            <Text style={styles.timerTxt}>{`${formatTime(
              timeUnits.days
            )} : ${formatTime(timeUnits.hours)} : ${formatTime(
              timeUnits.minutes
            )} : ${formatTime(timeUnits.seconds)}`}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: 20, }}>
            <ProductsCard index={index} item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default FlashSale;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  titleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 7,
    marginVertical: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.black,
    letterSpacing: 0.6,
  },
  titleBtn: {
    fontSize: 14,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  timerWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.highlight,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    gap: 5,
  },
  timerTxt: {
    fontSize: 14,
    fontWeight: "500",
    color: Colors.black,
  },
});
