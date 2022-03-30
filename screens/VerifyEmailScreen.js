import React, { useState } from "react";
import { Column, Center, Icon, Heading, Box, Button } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { getAuth, sendEmailVerification } from "firebase/auth";

export default function VerifyEmailScreen({ setNav }) {
  const auth = getAuth();
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
          <Button
            px="10"
            onPress={() => {
              sendEmailVerification(auth.currentUser);
              setNav("signin");
              console.log("Resent link");
            }}
          >
            Bestätigungslink erneut senden
          </Button>
        </Center>
      </Box>
    </Center>
  );
}
