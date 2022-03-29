import React, { useState, createContext, useEffect } from "react";
import { Center, NativeBaseProvider, extendTheme, Stack } from "native-base";
import MainContainer from "./container/MainContainer";
import AuthContainer from "./container/AuthContainer";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
export const UserContext = createContext();

export default function App() {
  let [nav, setNav] = useState("signin");
  let [user, setUser] = useState();
  return (
    <NativeBaseProvider theme={theme}>
      <UserContext.Provider value={user}>
        <Center flex={1}>
          <Stack
            m="0"
            w="100%"
            h="100%"
            direction={{ base: "column", md: "row" }}
            rounded="xl"
          >
            {!user ? (
              <AuthContainer nav={nav} setNav={setNav} setUser={setUser} />
            ) : (
              <MainContainer
                nav={nav}
                setNav={setNav}
                user={user}
                setUser={setUser}
              />
            )}
          </Stack>
        </Center>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
