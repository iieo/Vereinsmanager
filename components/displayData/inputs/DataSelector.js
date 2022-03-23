import React, { useState } from "react";
import { Text, Modal, Pressable, Button, Column } from "native-base";

export default function DataSelector({
  title,
  onSubmit,
  data,
  toReadableFormat,
  showModal,
  setShowModal,
}) {
  const [selected, setSelected] = useState(true);

  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false);
      }}
    >
      <Modal.Content maxWidth={"500px"} maxHeight={"800px"}>
        <Modal.CloseButton />
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <Column>
            {data?.map((obj) => (
              <Pressable
                mx="12"
                my="2"
                px="4"
                py="2"
                bg={selected === obj ? "muted.600" : "muted.800"}
                borderRadius="sm"
                _hover={{ bg: "muted.900" }}
                onPress={() => {
                  setSelected(obj);
                }}
              >
                <Text>{toReadableFormat(obj)}</Text>
              </Pressable>
            ))}
          </Column>
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
                onSubmit(selected);
                setShowModal(false);
              }}
            >
              Auswählen
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
