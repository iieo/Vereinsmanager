import React from "react";
import { Text, Box } from "native-base";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import VerifyEmailScreen from "../screens/VerifyEmailScreen";
export default function AuthNavigator({ nav, setNav }) {
  let screen = <Text>Not available: {nav}</Text>;

  switch (nav) {
    case "signin":
      screen = <SigninScreen />;
      break;
    case "signup":
      screen = <SignupScreen setNav={setNav} />;
      break;
    case "verify":
      screen = <VerifyEmailScreen setNav={setNav} />;
      break;
  }
  return (
    <Box
      flex={{ base: 1, md: 3 }}
      _dark={{ bg: "muted.800" }}
      _light={{ bg: "light.50" }}
    >
      {screen}
    </Box>
  );
}
