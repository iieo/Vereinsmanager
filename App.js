import React, { useState, createContext } from "react";
import { Center, NativeBaseProvider, extendTheme, Stack } from "native-base";
import MainContainer from "./container/MainContainer";
import AuthContainer from "./container/AuthContainer";
import Person from "./components/datahandler/Person";
import { getAuth } from "firebase/auth";
import {
  setPersistence,
  browserSessionPersistence,
  onAuthStateChanged,
} from "firebase/auth";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
export const UserContext = createContext();

export default function App() {
  const auth = getAuth();
  let [nav, setNav] = useState("signin");
  let [user, setUser] = useState();
  let [redirected, setRedirected] = useState(false);
  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      if (!userAuth.emailVerified) {
        if (!redirected) {
          setNav("verify");
          setRedirected(true);
        }
      } else {
        if (nav === "verify" || nav === "signin" || nav === "signup") {
          setNav("dashboard");
          setUser(userAuth);
          console.log("Signed in!");
        }
      }
    } else {
      setNav("signin");
      setUser(null);
    }
  });
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
              <AuthContainer nav={nav} setNav={setNav} />
            ) : (
              <MainContainer nav={nav} setNav={setNav} />
            )}
          </Stack>
        </Center>
      </UserContext.Provider>
    </NativeBaseProvider>
  );
}
