import React, { useState, useContext } from "react";
import { FormControl, Icon, Button, Input, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function DataInput({ inputData, inputValues, setInputValues }) {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormControl.Label>{inputData.text}</FormControl.Label>
      <Input
        value={inputValues[inputData.replacing]}
        type={show ? "text" : "password"}
        onChangeText={(newText) => {
          setInputValues((prev) => ({
            ...prev,
            [inputData.replacing]: newText,
          }));
        }}
        placeholder={inputData.text}
        InputLeftElement={
          inputData.iconName && (
            <Icon
              as={<MaterialIcons name={inputData.iconName} />}
              size={5}
              ml="2"
              color="muted.400"
            />
          )
        }
        InputRightElement={
          <Button h="100%" w="1/5" onPress={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        }
      />
    </FormControl>
  );
}
