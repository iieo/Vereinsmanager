import React from "react";
import { Text, Heading, Box, Icon, Center } from "native-base";

import { MaterialIcons } from "@expo/vector-icons";
export default function InfoCard({ iconName, value, text }) {
  return (
    <Box bg={"info.800"} w="96" py="12" rounded="sm" m="10">
      <Center>
        <Icon
          as={<MaterialIcons name={iconName} />}
          size={20}
          mb="4"
          color="muted.100"
        />
        <Heading fontSize="4xl">{value}</Heading>
        <Text fontSize="xl">{text}</Text>
      </Center>
    </Box>
  );
}
