import React from "react";
import AuthSidebar from "./AuthSidebar";
import AuthNavigator from "./AuthNavigator";
import { Box, ScrollView } from "native-base";
export default function AuthContainer(props) {
  return (
    <>
      <AuthSidebar {...props} />

      <Box
        flex={{ base: 1, md: 3 }}
        _dark={{ bg: "muted.800" }}
        _light={{ bg: "light.50" }}
      >
        <AuthNavigator {...props} />
      </Box>
    </>
  );
}
