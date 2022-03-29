import React from "react";
import { Text, Column } from "native-base";
import DataCheckbox from "./inputs/DataCheckbox";
import SelectorInput from "./inputs/SelectorInput";
import DataInput from "./inputs/DataInputs";

export default function InputsManager(props) {
  let definedInputs = [].concat(props.modalData.defaultInputs);
  if (props.modalData.additionalInputs) {
    definedInputs = definedInputs.concat(props.modalData.additionalInputs);
  }
  const inputs = definedInputs.map((inputData) => {
    return <InputsManagerNavigator {...props} inputData={inputData} />;
  });
  return (
    <Column space="5" p="5">
      {inputs}
    </Column>
  );
}
function InputsManagerNavigator(props) {
  let input = <Text>Error creating input</Text>;
  switch (props.inputData.type) {
    case "checkbox":
      input = <DataCheckbox {...props} />;
      break;
    case "selectUser":
      input = (
        <SelectorInput
          {...props}
          data={props.data.persons}
          title="Wähle eine Person aus..."
        />
      );
      break;
    case "selectAccount":
      input = (
        <SelectorInput
          {...props}
          data={props.data.accounts}
          title="Wähle ein Konto aus..."
        />
      );
      break;
    default:
      input = <DataInput {...props} />;
      break;
  }
  return input;
}
