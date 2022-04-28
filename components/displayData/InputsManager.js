import React from "react";
import { Text, Column } from "native-base";
import DataCheckbox from "./inputs/DataCheckbox";
import SelectorInputButton from "./inputs/SelectorInputButton";
import DataInput from "./inputs/DataInputs";
import PasswordInput from "./inputs/PasswordInput";
import DatePicker from "./inputs/DatePicker";

export default function InputsManager(props) {
  let definedInputs = [].concat(props.modalData.defaultInputs);
  if (props.modalData.additionalInputs) {
    definedInputs = definedInputs.concat(props.modalData.additionalInputs);
  }
  console.log(inputs);
  const inputs = definedInputs.map((inputData, index) => {
    return (
      <InputsManagerSeparator
        {...props}
        inputData={inputData}
        key={inputData + index}
      />
    );
  });
  return <Column space="5">{inputs}</Column>;
}
function InputsManagerSeparator(props) {
  let input = <Text>Error creating input: {props.inputData.type}</Text>;
  switch (props.inputData.type) {
    case "checkbox":
      input = <DataCheckbox {...props} />;
      break;
    case "selectUser":
      input = (
        <SelectorInputButton
          {...props}
          data={props.data.persons}
          title="Wähle eine Person aus..."
        />
      );
      break;
    case "selectAccount":
      input = (
        <SelectorInputButton
          {...props}
          data={props.data.accounts}
          title="Wähle ein Konto aus..."
        />
      );
      break;
    case "dateComnigSoon":
      input = <DatePicker {...props} />;
      break;
    case "password":
      input = <PasswordInput {...props} />;
      break;
    default:
      input = <DataInput {...props} type={props.inputData.type} />;
      break;
  }
  return input;
}
