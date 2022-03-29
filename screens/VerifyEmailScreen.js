import React, { useState } from "react";
import {
  Column,
  Center,
  Icon,
  Heading,
  Box,
  Button,
  Divider,
  Text,
} from "native-base";
import DataInput from "../components/displayData/inputs/DataInputs";
import { MaterialIcons } from "@expo/vector-icons";

export default function VerifyEmailScreen({ setNav }) {
  const [state, setState] = useState({
    email: "test@test.de",
    password: "testtest",
  });
  return (
    <Center flex="1">
      <Box
        _dark={{ bg: "gray.700" }}
        _light={{ bg: "light.200" }}
        p="10"
        rounded="sm"
      >
        <Center flex="1">
          <Icon as={<MaterialIcons name="email" />} size={32} color="white" />
          <Heading my="5">Bestätige bitte deine E-Mail-Adresse</Heading>
          <Button px="10" onPress={() => setNav("signin")}>
            Zum Anmelden
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
