import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ViewToken,
} from "react-native";
import React, { useRef, useState } from "react";
import Pagination from "@/components/ProductsPage/Pagination";

type Props = {
  imageList: string[];
};

const width = Dimensions.get("screen").width;

const ImageSlider = ({ imageList }: Props) => {
  const [paginationIndex, setPaginationIndex] = useState(0);
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index % imageList.length);
    }
  };
  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        data={imageList}
        keyExtractor={(item) => item}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
      />
      <Pagination item={imageList} paginationIndex={paginationIndex} />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {},
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
});
