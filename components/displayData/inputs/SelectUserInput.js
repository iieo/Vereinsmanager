import React, { useState, useContext } from "react";

import { Text, Row, Pressable, Icon } from "native-base";
import DataSelector from "./DataSelector";
import { DataContext } from "../../database/DatabaseProvider";

import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function SelectUserInput({ inputData, setInputValues }) {
  const data = useContext(DataContext);
  console.log(data);

  const [showModal, setShowModal] = useState(false);
  const defaultText = "Wähle Person aus...";
  const [selectedText, setSelectedText] = useState(defaultText);
  return (
    <>
      <Pressable
        mx="5"
        rounded="sm"
        py="1.5"
        borderColor="gray.500"
        borderWidth=".5"
        _hover={{ bg: "gray.700" }}
        onPress={() => {
          setShowModal(true);
        }}
      >
        <Row align="center">
          <Icon
            as={<MaterialCommunityIcons name={"cursor-default-click"} />}
            size={5}
            mx="2"
            color="gray.400"
          />
          <Text color={selectedText === defaultText ? "gray.400" : "white"}>
            {selectedText}
          </Text>
        </Row>
      </Pressable>
      <DataSelector
        showModal={showModal}
        setShowModal={setShowModal}
        data={data?.users.data}
        toReadableFormat={(user) => user.name + " " + user.firstName}
        title={"Wähle eine Person..."}
        onSubmit={(selected) => {
          setInputValues((prev) => ({
            ...prev,
            [inputData.replacing]: selected.id,
          }));
          setSelectedText(selected.name + " " + selected.firstName);
        }}
      />
    </>
  );
}
