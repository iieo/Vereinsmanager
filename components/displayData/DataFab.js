import React, { useState } from "react";
import {
  Fab,
  Text,
  Modal,
  FormControl,
  Box,
  Icon,
  Input,
  Button,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import InputModal from "./InputModal";

export default function DataFab({ text, modalData }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Fab
        placement="bottom-right"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size={4} />}
        label={<Text fontSize="sm">{text}</Text>}
        mr="10"
        mb="6"
        onPress={() => {
          setShowModal(true);
        }}
      />
      <InputModal
        showModal={showModal}
        setShowModal={setShowModal}
        modalData={modalData}
      />
    </>
  );
}
