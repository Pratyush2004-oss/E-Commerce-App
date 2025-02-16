import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { NotificationType } from "@/types/type";
import { notificationsData } from "@/data/data";
import { useHeaderHeight } from "@react-navigation/elements";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeInDown } from "react-native-reanimated";
import Loader from "@/components/Loader";

type Props = {};

const NotificationsScreen = (props: Props) => {
  const headerHeight = useHeaderHeight();
  const [notifications, setnotifications] = useState<NotificationType[]>([]);
  const [loading, setloading] = useState<boolean>(false);
  useEffect(() => {
    getNotifications();
  }, []);
  const getNotifications = () => {
    setloading(true);
    setnotifications(notificationsData);
    setloading(false);
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: true, headerTransparent: true }} />
      <View style={[styles.container, { marginTop: headerHeight }]}>
        {loading && <Loader />}
        <FlatList
          data={notifications}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Animated.View
              key={index}
              style={styles.itemWrapper}
              entering={FadeInDown.delay(300 + index * 100).duration(500)}
            >
              <View style={styles.Notification}>
                <Text style={styles.title}>{item.title}</Text>
                <Ionicons
                  name="notifications-outline"
                  size={22}
                  color={Colors.black}
                />
              </View>
              <Text style={styles.text}>{item.message}</Text>
              <Text style={styles.timeStamps}>{item.timestamp}</Text>
            </Animated.View>
          )}
        />
      </View>
    </>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  itemWrapper: {
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: Colors.extraLghtGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    gap: 10,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  Notification: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
  },
  timeStamps: {
    textAlign: "right",
    fontSize: 14,
  },
});
