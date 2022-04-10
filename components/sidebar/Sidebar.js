import React from "react";
import {
  Text,
  Link,
  HStack,
  Heading,
  Switch,
  Pressable,
  useColorMode,
  Divider,
  Row,
  Column,
  Icon,
} from "native-base";
import NativeBaseIcon from "../NativeBaseIcon";
import SidebarItem from "./SidebarItem";
export default function Sidebar({ items }) {
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
          {items.map((item, index) => (
            <SidebarItem
              key={item + index}
              onPress={item.onPress}
              isActive={false}
              icon={item.iconName}
            >
              {item.text}
            </SidebarItem>
          ))}
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
