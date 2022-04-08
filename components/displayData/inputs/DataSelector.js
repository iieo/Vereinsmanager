import React, { useState } from "react";
import {
  Text,
  Modal,
  Pressable,
  Button,
  Column,
  Input,
  FormControl,
} from "native-base";

export default function DataSelector({
  title,
  onSubmit,
  data,
  showModal,
  setShowModal,
}) {
  const [selected, setSelected] = useState(true);
  const [filterString, setFilterString] = useState("");

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
        <Modal.Body p="9">
          <SearchInput
            text="Filter..."
            value={filterString}
            setValue={setFilterString}
          />
          <Column>
            {data?.map((obj) => {
              if (
                filterString === "" ||
                obj
                  .toString()
                  .toLowerCase()
                  .startsWith(filterString.toLowerCase())
              ) {
                return (
                  <SelectorItem
                    selected={selected}
                    setSelected={setSelected}
                    object={obj}
                  />
                );
              }
            })}
          </Column>
        </Modal.Body>
        <Modal.Footer px="9">
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
function SearchInput({ value, setValue, text, iconName }) {
  return (
    <FormControl mb="5">
      <FormControl.Label>{text}</FormControl.Label>
      <Input
        value={value}
        onChangeText={(text) => {
          setValue(text);
        }}
        placeholder={text}
        InputLeftElement={
          iconName && (
            <Icon
              as={<MaterialIcons name={iconName || "search"} />}
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
function SelectorItem({ selected, setSelected, object }) {
  return (
    <Pressable
      my="2"
      px="4"
      py="2"
      bg={selected === object ? "muted.600" : "muted.800"}
      borderRadius="sm"
      _hover={{ bg: "muted.900" }}
      onPress={() => {
        setSelected(object);
      }}
    >
      <Text>{object.toString()}</Text>
    </Pressable>
  );
}
