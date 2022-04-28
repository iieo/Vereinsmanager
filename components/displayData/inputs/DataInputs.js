import React, { useState, useContext } from "react";
import { FormControl, Icon, Input } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export default function DataInput({
  inputData,
  inputValues,
  setInputValues,
  type,
}) {
  const onChange = (newText) => {
    switch (type) {
      case "tel":
        newText = newText.replace(/[^0-9]/g, "");
        break;
      case "number":
        newText = newText.replace(/[^0-9]/g, "");
        break;
    }
    setInputValues((prev) => ({
      ...prev,
      [inputData.replacing]: newText,
    }));
  };

  return (
    <FormControl>
      <FormControl.Label>{inputData.text}</FormControl.Label>
      <Input
        type={type}
        value={inputValues[inputData.replacing]}
        onChangeText={onChange}
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
