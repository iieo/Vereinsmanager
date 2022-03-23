import React, { useState, useContext } from "react";
import { FormControl, Row, Checkbox } from "native-base";

export default function DataCheckbox({
  inputData,
  inputValues,
  setInputValues,
}) {
  return (
    <FormControl mt="5" px="5">
      <Row justifyContent="space-between">
        <FormControl.Label>{inputData.text}</FormControl.Label>
        <Checkbox
          isChecked={inputValues[inputData.replacing]}
          onChange={(value) => {
            setInputValues((prev) => ({
              ...prev,
              [inputData.replacing]: value,
            }));
          }}
        />
      </Row>
    </FormControl>
  );
}
