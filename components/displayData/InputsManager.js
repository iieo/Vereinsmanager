import React, { useState, useContext } from "react";
import { Text, Column } from "native-base";
import DataCheckbox from "./inputs/DataCheckbox";
import SelectorInput from "./inputs/SelectorInput";
import DataInput from "./inputs/DataInputs";

export default function InputsManager(props) {
  const definedInputs = [].concat(
    props.modalData.defaultInputs,
    props.modalData.additionalInputs
  );
  const inputs = definedInputs.map((inputData) => (
    <ModalInput {...props} inputData={inputData} />
  ));
  return (
    <Column space="5" p="5">
      {inputs}
    </Column>
  );
}
function ModalInput(props) {
  let input = <Text>Error creating input</Text>;
  switch (props.inputData.type) {
    case "checkbox":
      input = <DataCheckbox {...props} />;
      break;
    case "selectUser":
      input = (
        <SelectorInput
          {...props}
          data={props.data?.persons.data}
          title="Wähle eine Person aus..."
          toReadableFormat={(user) => user.name + " " + user.firstName}
        />
      );
      break;
    case "selectAccount":
      input = (
        <SelectorInput
          {...props}
          data={props.data?.accounts.data}
          title="Wähle ein Konto aus..."
          toReadableFormat={(account) => account.id + " " + account.iban}
        />
      );
      break;
    default:
      input = <DataInput {...props} />;
      break;
  }
  return input;
}
