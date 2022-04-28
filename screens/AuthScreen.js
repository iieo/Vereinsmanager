import React, { useState } from "react";
import { Column, Center, Heading, Box, Button, Divider } from "native-base";
import DataInput from "../components/displayData/inputs/DataInputs";
import InputsManager from "../components/displayData/InputsManager";

export default function AuthScreen({ title, inputs, onSubmit }) {
  const [state, setState] = useState({
    email: "bamiroj341@aikusy.com",
    password: "password",
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
          <Heading mb="10">{title}</Heading>
          <Column space="7">
            <InputsManager
              modalData={{ defaultInputs: inputs }}
              inputValues={state}
              setInputValues={setState}
            />
            <Divider my="2" />
            <Button px="32" onPress={() => onSubmit(state)}>
              {title}
            </Button>
          </Column>
        </Center>
      </Box>
    </Center>
  );
}
