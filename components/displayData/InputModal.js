import React, { useState, useContext } from "react";

import {
  Fab,
  Text,
  Modal,
  FormControl,
  Box,
  Icon,
  ScrollView,
  Input,
  KeyboardAvoidingView,
  Button,
} from "native-base";
import { DataContext } from "../datahandler/DatabaseProvider";
import InputsManager from "./InputsManager";

export default function InputModal({ showModal, setShowModal, modalData }) {
  const [inputValues, setInputValues] = useState({});
  const data = useContext(DataContext);

  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <Modal.Content maxWidth={"500px"} maxHeight={"800px"}>
        <Modal.CloseButton />
        <Modal.Header>{modalData?.title}</Modal.Header>
        <Modal.Body p="9">
          <KeyboardAvoidingView behavior="padding" enabled>
            <InputsManager
              data={data}
              modalData={modalData}
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          </KeyboardAvoidingView>
        </Modal.Body>
        <Modal.Footer px="9">
          <Button.Group space={4}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
                setInputValues({})
              }}
            >
              Abbrechen
            </Button>
            <Button
              onPress={() => {
                modalData.addItem(inputValues);
                setShowModal(false);
                setInputValues({})
              }}
            >
              Speichern
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
