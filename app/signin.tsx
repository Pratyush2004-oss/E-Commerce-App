import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import InputField from "@/components/InputField";
import SocialButtons from "@/components/SocialButtons";

type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerTitle: "Sign Up" }} />
      <View style={styles.container}>
        <Text style={styles.title}>Login to your account</Text>
        <InputField
          placeholder="Email Address"
          placeholderTextColor={Colors.black}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <InputField
          placeholder="Password"
          placeholderTextColor={Colors.black}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTxt}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.loginTxt}>
          Don't have an account?{" "}
          <Link href={"/signup"} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Signup</Text>
            </TouchableOpacity>
          </Link>
        </Text>
        <View style={styles.divider} />
          <Link href={"/cart"} asChild>
            <TouchableOpacity>
              <Text style={styles.loginTxtSpan}>Home</Text>
            </TouchableOpacity>
          </Link>

        {/* SocialButtons having google, apple and email */}
        <SocialButtons emailHref={"/signup"} />
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing: 1.2,
    color: Colors.black,
    marginBottom: 50,
  },
  btn: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 14,
    borderRadius: 50,
    alignSelf: "stretch",
    alignItems: "center",
    marginBottom: 20,
  },
  btnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
  },
  loginTxt: {
    marginBottom: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24,
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: "600",
  },
  divider: {
    height: 10,
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: "30%",
    marginBottom: 30,
  },
});
