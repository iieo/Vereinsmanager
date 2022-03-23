import React, { useState } from "react";
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
import InputsManager from "./InputsManager";

export default function InputModal({ showModal, setShowModal, modalData }) {
  const [inputValues, setInputValues] = useState({});

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
        <Modal.Body p="4">
          <KeyboardAvoidingView behavior="padding" enabled>
            <InputsManager
              modalData={modalData}
              inputValues={inputValues}
              setInputValues={setInputValues}
            />
          </KeyboardAvoidingView>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={4}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}
            >
              Abbrechen
            </Button>
            <Button
              onPress={() => {
                modalData.addItem(inputValues);
                setShowModal(false);
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
