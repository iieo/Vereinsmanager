import React, { useState, useContext } from "react";

import {
  Text,
  Center,
  FormControl,
  Column,
  Row,
  Pressable,
  Icon,
} from "native-base";
import DataSelector from "./DataSelector";
import { DataContext } from "../../datahandler/DatabaseProvider";

import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function SelectInputButton(props) {
  const defaultText = props.inputData.text;
  const [showModal, setShowModal] = useState(false);
  const [selectedText, setSelectedText] = useState(defaultText);
  return (
    <FormControl>
      <FormControl.Label>{props.inputData.text}</FormControl.Label>
      <Pressable
        rounded="sm"
        py="1.5"
        borderColor="gray.500"
        borderWidth=".5"
        _hover={{ bg: "gray.800" }}
        onPress={() => {
          setShowModal(true);
        }}
      >
        <Row align="center">
          <Center>
            <Icon
              as={<MaterialCommunityIcons name={"cursor-default-click"} />}
              size={5}
              mx="2"
              color="gray.400"
            />
          </Center>
          <Text color={selectedText === defaultText ? "gray.400" : "white"}>
            {selectedText}
          </Text>
        </Row>
      </Pressable>
      <DataSelector
        {...props}
        showModal={showModal}
        setShowModal={setShowModal}
        onSubmit={(selected) => {
          props.setInputValues((prev) => ({
            ...prev,
            [props.inputData.replacing]: selected.id,
          }));
          setSelectedText(selected.toString());
        }}
      />
    </FormControl>
  );
}
