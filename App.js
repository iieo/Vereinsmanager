import React, { useState, createContext } from "react";
import { Center, NativeBaseProvider, extendTheme, Stack } from "native-base";
import MainContainer from "./container/MainContainer";
import AuthContainer from "./container/AuthContainer";
import Person from "./components/datahandler/Person";
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const auth = getAuth();
  let [nav, setNav] = useState("signin");
  let [user, setUser] = useState();
  onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      console.log("still signed in");
      if (!userAuth.emailVerified) {
        setNav("verify");
      } else {
        if (nav === "verify" || nav === "signin" || nav === "signup") {
          setNav("dashboard");
          setUser(userAuth);
          console.log("Signed in!");
        }
      }
    } else {
      setUser(null);
      if (nav !== "signin" && nav !== "signup") {
        setNav("signin");
      }
    }
  });
  return (
    <NativeBaseProvider theme={theme}>
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
    </NativeBaseProvider>
  );
}
