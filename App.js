import React, { useState, useEffect } from "react";
import {
  Center,
  NativeBaseProvider,
  extendTheme,
  Box,
  Stack,
} from "native-base";
import { initializeApp } from "firebase/app";
import Sidebar from "./components/Sidebar";
import Datascreen from "./components/DataScreen";
import Dashboard from "./components/Dashboard";
import { collection, getDocs } from "firebase/firestore";
import Constants from "expo-constants";
import db from "./components/Database";

const initData = {
  header: [
    "name",
    "firstName",
    "birthdate",
    "other9",
    "other8",
    "other7",
    "other6",
    "other5",
    "other4",
    "other3",
    "other2",
    "other1",
  ],
  items: [
    [
      "Wick",
      "John",
      null,
      "other",
      "other",
      "other",
      "other",
      "other",
      "other",
      "other",
      "other",
      "other",
    ],
    ["Einstein", "Albert", null],
    ["Reynolds", "Ryan", null],
    ["Cena", "John", null],
    ["Ellis", "John", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Cena", "John", null],
    ["Ellis", "John", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Cena", "John", null],
    ["Ellis", "John", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Cena", "John", null],
    ["Ellis", "John", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
    ["Wick", "Tom", null],
  ],
};

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [users, setUsers] = useState();

  useEffect(async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    let userDocs = [];
    querySnapshot.forEach((doc) => {
      userDocs.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setUsers(userDocs);
  }, []);

  let [data, setData] = useState(initData);
  let [nav, setNav] = useState("persons");
  function changeData(dataIndex, index, value) {
    setData((prevData) => {
      let changedData = { ...prevData };
      changedData.items[dataIndex][index] = value;
      console.log(changedData);
      return changedData;
    });
  }
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
          <Sidebar setNav={setNav} />
          <Box
            flex={{ base: 1, md: 3 }}
            _dark={{ bg: "muted.800" }}
            _light={{ bg: "amber.50" }}
          >
            {nav === "dashboard" ? (
              <Dashboard nav={nav} />
            ) : (
              <Datascreen nav={nav} data={users} changeData={changeData} />
            )}
          </Box>
        </Stack>
      </Center>
    </NativeBaseProvider>
  );
}
