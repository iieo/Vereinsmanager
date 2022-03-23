import React, { useState, useContext } from "react";
import { FormControl, Icon, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function DataInput({ inputData, inputValues, setInputValues }) {
  return (
    <FormControl mt="3" px="5">
      <FormControl.Label>{inputData.text}</FormControl.Label>
      <Input
        value={inputValues[inputData.replacing]}
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
      />
    </FormControl>
  );
}
