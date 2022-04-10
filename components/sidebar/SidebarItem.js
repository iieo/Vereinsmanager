import React from "react";
import { Text, Pressable, Row, Icon } from "native-base";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function SidebarItem({ children, icon, onPress, isActive }) {
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
        <Icon as={<AntDesign name={icon} />} size={30} ml="2" color="white" />
        <Text>{children}</Text>
      </Row>
    </Pressable>
  );
}
