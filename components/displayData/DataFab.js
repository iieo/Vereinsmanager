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

export default function DataFab({ text, children }) {
  const [showModal, setShowModal] = useState(false);
  let childrenWithProps = React.Children.map(children, function (child) {
    return React.cloneElement(child, {
      showModal,
      setShowModal,
    });
  });
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
      {childrenWithProps}
    </>
  );
}
