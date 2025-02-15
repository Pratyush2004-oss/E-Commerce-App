import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

type Props = {
  item: string[];
  paginationIndex: number;
};

const width = Dimensions.get("screen").width;

const Pagination = (props: Props) => {
  return (
    <View style={styles.Container}>
      {props.item.length > 0 &&
        props.item.map((item, index) => (
          <View
            key={index}
            style={[
              styles.paginationDots,
              {
                backgroundColor:
                  index === props.paginationIndex
                    ? Colors.primary
                    : Colors.lightGray,
              },
            ]}
          />
        ))}
      <View style={styles.paginationContainer}>
        <View style={styles.paginationNumberBox}>
          <Text style={styles.paginationTxt}>
            {props.paginationIndex + 1}/{props.item.length}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  Container: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
  },
  paginationDots: {
    width: 30,
    height: 4,
    borderRadius: 5,
    margin: 3,
  },
  paginationContainer: {
    position: "absolute",
    alignItems: "flex-end",
    width: "100%",
    paddingRight: 20,
  },
  paginationNumberBox: {
    backgroundColor: Colors.extraLghtGray,
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  paginationTxt: {
    color: Colors.primary,
  },
});
