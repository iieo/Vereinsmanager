import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  Pressable,
  useColorMode,
  NativeBaseProvider,
  Divider,
  Row,
  Column,
  Code,
  Box,
  Stack,
} from "native-base";
import NativeBaseIcon from "./NativeBaseIcon";
import Icon from "react-native-vector-icons/AntDesign";

export default function Sidebar({ setNav, nav }) {
  return (
    <>
      <Column
        space={{ base: 0, md: 4 }}
        flex={{ base: -1, md: 1 }}
        p="5"
        _dark={{ bg: "info.800" }}
        _light={{ bg: "blue.400" }}
      >
        <Column
          space="2"
          mt="8"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <NativeBaseIcon />
          <Heading mt="6" size="md">
            Orchester Akademie Dorfen
          </Heading>
          <Link isExternal href="http://orchester-akademie-dorfen.de/">
            orchester-akademie-dorfen.de
          </Link>
        </Column>
        <Divider />

        <Column
          display={{ base: "none", md: "flex" }}
          space="5"
          mt="8"
          alignItems="center"
        >
          <SidebarItem
            onPress={() => {
              setNav("dashboard");
            }}
            isActive={nav === "dashboard"}
            icon="dashboard"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            onPress={() => {
              setNav("users");
            }}
            isActive={nav === "users"}
            icon="user"
          >
            Personen
          </SidebarItem>
          <SidebarItem
            onPress={() => {
              setNav("members");
            }}
            isActive={nav === "members"}
            icon="team"
          >
            Mitglieder
          </SidebarItem>
          <SidebarItem
            onPress={() => {
              setNav("accounts");
            }}
            isActive={nav === "accounts"}
            icon="creditcard"
          >
            Konten
          </SidebarItem>
          <SidebarItem
            onPress={() => {
              setNav("invoices");
            }}
            isActive={nav === "invoices"}
            icon="tago"
          >
            Rechnungen
          </SidebarItem>
          <ToggleDarkMode />
        </Column>
      </Column>
    </>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode, isActive } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
function SidebarItem({ children, icon, onPress, isActive }) {
  return (
    <Pressable
      onPress={onPress}
      rounded="sm"
      w="90%"
      p="4"
      _hover={{
        _dark: { bg: "info.900" },
        _light: { bg: "blue.300" },
      }}
      _dark={{ bg: isActive ? "info.900" : null }}
      _light={{ bg: isActive ? "blue.400" : null }}
    >
      <Row alignItems={"center"} space="5">
        <Icon name={icon} size={30} color="#000" />
        <Text>{children}</Text>
      </Row>
    </Pressable>
  );
}
