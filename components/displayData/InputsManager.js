import React from "react";
import { Text } from "native-base";
import DataCheckbox from "./inputs/DataCheckbox";
import SelectUserInput from "./inputs/SelectUserInput";
import DataInput from "./inputs/DataInputs";

export default function InputsManager(props) {
  const definedInputs = [].concat(
    props.modalData.defaultInputs,
    props.modalData.additionalInputs
  );
  const inputs = definedInputs.map((inputData) => (
    <ModalInput {...props} inputData={inputData} />
  ));
  return inputs;
}
function ModalInput(props) {
  let input = <Text>Error creating input</Text>;
  switch (props.inputData.type) {
    case "checkbox":
      input = <DataCheckbox {...props} />;
      break;
    case "selectUser":
      input = <SelectUserInput {...props} />;
      break;
    default:
      input = <DataInput {...props} />;
      break;
  }
  return input;
}
