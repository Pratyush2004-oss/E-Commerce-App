import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import Google from "@/assets/images/google-logo.svg";

type Props = {};

const SocialButtons = (props: Props) => {
  return (
    <View style={styles.socialLoginWrapper}>
      <Animated.View entering={FadeInDown.delay(500).duration(500)}>
        <Link href={"/signup"} asChild>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" size={20} color={Colors.black} />
            <Text style={styles.buttonText}>Continue with Email</Text>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(800).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Google width={20} height={20} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="logo-apple" size={20} color={Colors.black} />
          <Text style={styles.buttonText}>Continue with Apple</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SocialButtons;

const styles = StyleSheet.create({
  socialLoginWrapper: {
    alignSelf: "stretch",
  },
  button: {
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    gap: 10,
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: "600",
  },
});
