import React, { useState, createContext, useEffect } from "react";
import {
  Center,
  NativeBaseProvider,
  extendTheme,
  Box,
  Stack,
} from "native-base";
import Navigator from "./components/Navigator";
import Sidebar from "./components/Sidebar";
import DatabaseProvider from "./components/datahandler/DatabaseProvider";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
export const UserContext = createContext();

export default function NavContainer({sidebarItems}) {
  return (
    <NativeBaseProvider theme={theme}>
      <UserContext.Provider value={user}>
        <DatabaseProvider user={user}>
          <Center flex={1}>
            <Stack
              m="0"
              w="100%"
              h="100%"
              direction={{ base: "column", md: "row" }}
              rounded="xl"
            >
              <Sidebar items={sidebarItems} />
              <Navigator nav={nav} setNav={setNav} setUser={setUser} />
            </Stack>
          </Center>
        </DatabaseProvider>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
