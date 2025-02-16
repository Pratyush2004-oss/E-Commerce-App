import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Profile } from "@/data/data";

type Props = {};

const ProfileScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={{ uri: "https://xsgames.co/randomusers/avatar.php?g=male" }}
            style={styles.image}
          />
          <Text style={styles.userName}>John Doe</Text>
        </View>
        <FlatList
          data={Profile}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.buttonWrapper}>
              <TouchableOpacity style={{ flexDirection: "row", gap: 10 }}>
                <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={22} color={Colors.black} />
                <Text style={styles.btnTxt}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.6,
    color: Colors.black,
    marginBottom: 10,
  },
  buttonWrapper: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    padding: 10,
    marginVertical: 10,
  },
  btnTxt: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.6,
    color: Colors.black,
  },
});
