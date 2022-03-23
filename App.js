import React, { useState, useEffect } from "react";
import {
  Center,
  NativeBaseProvider,
  extendTheme,
  Box,
  Stack,
} from "native-base";
import Navigator from "./components/Navigator";
import Sidebar from "./components/Sidebar";
import DatabaseProvider from "./components/database/DatabaseProvider";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  let [nav, setNav] = useState("accounts");
  return (
    <NativeBaseProvider theme={theme}>
      <DatabaseProvider>
        <Center flex={1}>
          <Stack
            m="0"
            w="100%"
            h="100%"
            direction={{ base: "column", md: "row" }}
            rounded="xl"
          >
            <Sidebar nav={nav} setNav={setNav} />
            <Box
              flex={{ base: 1, md: 3 }}
              _dark={{ bg: "muted.800" }}
              _light={{ bg: "light.50" }}
            >
              <Navigator nav={nav} />
            </Box>
          </Stack>
        </Center>
      </DatabaseProvider>
    </NativeBaseProvider>
  );
}
